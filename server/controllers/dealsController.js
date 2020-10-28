
const createError = require("http-errors");
const Deal = require("../models/Deal");


exports.getDeals = async (req, res, next) => {
  let deals = { searcherList: undefined, providerList: undefined };
  deals["searcherList"] = await Deal.find({ searcher: req.user._id })
    .populate(
      "searcher",
      "-email -city -street -zip -services -availability -bio"
    )
    .populate(
      "provider",
      "-email -city -street -zip -services -availability -bio"
    )
    .populate("dealService");

  deals["providerList"] = await Deal.find({ provider: req.user._id })
    .populate(
      "searcher",
      "-email -city -street -zip -services -availability -bio"
    )
    .populate(
      "provider",
      "-email -city -street -zip -services -availability -bio"
    )
    .populate("dealService");
      deals.providerList.reverse()
      deals.searcherList.reverse()
  res.status(200).send(deals);
};

exports.addDeal = async (req, res, next) => {
  try {
    
    if (String(req.user._id) === String(req.body.provider))
      throw new createError("You can not book yourself");
    const newDeal = new Deal({ ...req.body, searcher: req.user._id });
    
    await newDeal.save();
    res.status(201).send(newDeal);
  } catch (err) {
    next(err);
  }
};

exports.confirmDeal = async (req, res, next) => {
  try {
    const dealId = req.params.id;
    const checkConfirmedDeal = await Deal.findById(dealId);

    if (String(checkConfirmedDeal.provider) !== String(req.user._id)) {
      throw new createError("You only can confirm the deals you provide");
    } else if (checkConfirmedDeal.canceled) {
      throw new createError("Deal has been canceled");
    } else {
      const confirmDeal = await Deal.findByIdAndUpdate(
        dealId,
        {
          approved: true,
        },
        { new: true }
      );
      res.status(200).send(confirmDeal);
    }
  } catch (err) {
    next(err);
  }
};

exports.cancelDeal = async (req, res, next) => {
  try {
    const dealId = req.params.id;
    const checkCancelDeal = await Deal.findById(dealId);
    if (checkCancelDeal.canceled)
      throw new createError("Deal is already canceled");
    if (checkCancelDeal.approved)
      throw new createError("Deal is already approved");
    if (
      String(checkCancelDeal.searcher) !== String(req.user._id) &&
      String(checkCancelDeal.provider) !== String(req.user._id)
    )
      throw new createError("You can't cancel a deal you aren't a part of");
    else {
      const cancelDeal = await Deal.findByIdAndUpdate(
        dealId,
        { canceled: true },
        { new: true }
      );
      res.status(200).send(cancelDeal);
    }
  } catch (err) {
    next(err);
  }
};
