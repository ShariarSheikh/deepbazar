const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AuthSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  number: {
    type: Number,
    required: [true, "Please provide number"],
    minlength: 9,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
    select: false,
  },
  profileImg: {
    type: String,
  },
  imagesFileName: {
    type: String,
  },
  accountType: {
    user: String,
    isAdmin: Boolean,
  },
});

//save password with bcrypt
AuthSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(15);
  this.password = await bcrypt.hash(this.password, salt);
});

// match password
AuthSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// create jwt token
AuthSchema.methods.getSignedToken = async function () {
  return await jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};

const AuthModel = mongoose.models.user || mongoose.model("user", AuthSchema);

module.exports = AuthModel;
