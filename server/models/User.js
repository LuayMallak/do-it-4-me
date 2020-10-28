const { Schema, model } = require("mongoose");

const { encrypt, check } = require("../lib/encryption");
const { sign, verify } = require("../lib/authentication");
const env = require("../config/environment");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      required: true,
      default: "user",
    },
    image: {
      type: String,
    },
    availability: {
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
    },
    services: [
      {
        type: Schema.Types.ObjectId,
        ref: "Service",
      },
    ],
    price: {
      type: Number,
      default: 0,
    },
    bio: {
      type: String,
    },
    totalRate: {
      type: Number,
    },
    rateCounter: {
      type: Number,
      default: 0,
    },
    rate: {
      type: Number,
      default: 0,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

UserSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});


UserSchema.pre("save", async function (next) {
  
  if (!this.isModified("password")) return next();

  this.password = await encrypt(this.password);
  
  next();
});

UserSchema.pre("save", async function (next) {
  
  if (
    this.services.length > 0 &&
    !(this.availability.startDate || this.availability.endDate)
  ) {
    const error = new Error("Please fill availability fields");
    error.code = 15000;
    next(error);
  } else next();
});


UserSchema.pre("findOneAndUpdate", async function (next) {
  if (!this._update.hasOwnProperty("password")) return next();
  this._update.password = await encrypt(this._update.password);
  next();
});

UserSchema.method("authenticate", async function (loginPassword) {
  return await check(loginPassword, this.password);
});

UserSchema.method("toJSON", function () {
  return {
    _id: this._id,
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    city: this.city,
    zip: this.zip,
    street: this.street,
    address: this.address,
    fullName: this.fullName,
    services: this.services,
    availability: this.availability,
    price: this.price,
    rate: this.rate,
    rateCounter: this.rateCounter,
    totalRate: this.totalRate,
    bio: this.bio,
    image: this.image,
  };
});

const tokenSecret = env.jwt_secret;

UserSchema.static("findByToken", async function (token) {
  
  let payload;
  try {
    payload = await verify(token, tokenSecret);
  } catch (err) {
    return null;
  }
  
  const user = await this.findOne({ _id: payload._id });
  return user;
});

UserSchema.method("generateAuthToken", async function () {
  return await sign({ _id: this._id, access: "auth" }, tokenSecret);
});

module.exports = model("User", UserSchema);
