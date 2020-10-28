const mongoose = require("mongoose");
const createError = require("http-errors");
const moment = require("moment");

const User = require("../models/User");
const Deal = require("../models/Deal");
const config = require("../config/environment");

exports.getUsers = async (req, res, next) => {
  const queryObject = {};

  if (req.query.city)
    queryObject.city = req.query.city.replace(/(?:^|\s|[-"'([{])+\S/g, (c) =>
      c.toUpperCase()
    );
  if (req.query.services) queryObject.services = req.query.services;
  else queryObject.services = { $exists: true, $not: { $size: 0 } };
  if (req.query.price)
    queryObject.price = {
      $lte: Number(req.query.price),
    };
  if (req.query.rate) {
    const queryRate = Number(req.query.rate);
    queryObject["rate"] = {
      $gte: queryRate,
    };
  }
  let queryDate = req.query.date ? moment(req.query.date).format("YYYY-MM-DD") : moment().format("YYYY-MM-DD");
  queryObject["availability.startDate"] = {
    $lte: queryDate,
  };
  queryObject["availability.endDate"] = { $gte: queryDate };
  
  try {
    const users = await User.find(queryObject).populate("services");
    
    res.status(200).send(users);
  } catch (err) {
    next(err);
  }
};

exports.addUser = async (req, res, next) => {
  try {
    
    const newUser = new User({ ...req.body, role: "user" });
    await newUser.save();
    const token = await newUser.generateAuthToken();
    
    res
      .cookie("loggedIn", true, {
        expires: new Date(Date.now() + 604800000),
        httpOnly: false,
        
      })
      .cookie("X-Auth-Token", token, {
        expires: new Date(Date.now() + 604800000),
        httpOnly: true,
        
      })
      .status(201)
      .send(newUser)
      .populate("services");
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) throw new createError.NotFound();
    const user = await User.findById(id).populate("services");
    

    if (!user) throw new createError.NotFound();
    if (req.canSeeFullUser) res.status(200).send(user);
    else {
      const reducedUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        services: user.services,
      };
      res.status(200).send(reducedUser);
    }
  } catch (err) {
    next(err);
  }
};

exports.userImage = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) throw new createError.NotFound();
    const imagePath = `${config.imageBaseURL}${req.file.filename}`;
    const updated = await User.findByIdAndUpdate(id, { image: imagePath });
    if (!updated) throw new createError.NotFound();

    res.status(200).send(updated);
  } catch (err) {
    next(err);
  }
};
exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) throw new createError.NotFound();
    const found = await User.findById(id).populate("services");
    if (!found) throw new createError.NotFound();
    for (const key in req.body) {
      found[key] = req.body[key];
    }
    found.role = "user";
    found.save();
    const user = await User.findById(id).populate("services");
    res.status(200).send(user);
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) throw new createError.NotFound();
    const deleted = await User.findByIdAndRemove(id);
    if (!deleted) throw new createError.NotFound();
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.headers)

  try {
    const loginUser = await User.findOne({ email }).populate("services");
    
    if (!loginUser)
      throw new createError.Unauthorized(
        "Your email or password was incorrect! Please try again"
      );
    const isAuthenticated = await loginUser.authenticate(password);
    
    if (!isAuthenticated)
      throw new createError.Unauthorized(
        "Your email or password was incorrect! Please try again"
      );
    const token = await loginUser.generateAuthToken();
    res.cookie("loggedIn", true, {
      expires: new Date(Date.now() + 604800000),
      httpOnly: false,
    });
    res
      .cookie("X-Auth-Token", token, {
        expires: new Date(Date.now() + 604800000),
        httpOnly: true,
      })
      .status(200)
      .send(loginUser);
  } catch (err) {
    next(err);
  }
};



exports.rateProvider = async (req, res, next) => {
  try {
    const ratedUserId = req.params.id;
    const ratedUser = await User.findById(ratedUserId);
    const ratedUserTotalRate = Number(ratedUser.totalRate) || 0;
    const dealId = req.body.dealId;
    const deal = await Deal.findById(dealId);
    const dealDate = moment(deal.dealDate).format("YYYY-MM-DD");
    const todayDate = moment().format("YYYY-MM-DD");
    const newRate = Number(req.body.rate) * 2;
    
    if (String(deal.searcher) !== String(req.user._id))
      throw new createError("You are not part of this deal");
    if (String(deal.provider) !== String(ratedUserId))
      throw new createError(
        "You can't rate a service provider you didn't have a deal with"
      );
    if (moment(dealDate) >= moment(todayDate))
      throw new createError(
        "You can't rate a service provider before the deal is already done"
      );
    if (deal.canceled)
      throw new createError(
        "You can't rate a service provider for a canceled deal"
      );
    if (!deal.approved)
      throw new createError(
        "You can't rate a service provider for an unconfirmed deal"
      );
    if (deal.rated)
      throw new createError(
        "You already rated this service provider for this deal"
      );
    await Deal.findByIdAndUpdate(dealId, { rated: true });

    const newCalculatedRate =
      Math.round(
        Number(ratedUserTotalRate + Number(newRate)) /
          Number(ratedUser.rateCounter + 1)) /
          2
       || 0;

    const userAfterRate = await User.findByIdAndUpdate(
      ratedUserId,
      {
        totalRate: ratedUserTotalRate + Number(newRate),
        rateCounter: ratedUser.rateCounter + 1,
        rate: newCalculatedRate,
      },
      { new: true }
    );

    res.status(200).send(userAfterRate);
  } catch (err) {
    next(err);
  }
};
