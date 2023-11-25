const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    personalID: {
      type: String,
      required: true,
    },
    cars:[
      {
        type: Schema.Types.ObjectId,
        required: false
      }
    ]
  },
  {
    timestamps: true,
  }
);


//middlewares
userSchema.statics.signup = async function (
  firstname,
  surname,
  email,
  personalID,
  phone,
  password,
  reTypePass
) {
  // Validation
  if (
    !email ||
    !personalID ||
    !firstname ||
    !surname ||
    !phone ||
    !password ||
    !reTypePass
  ) {
    throw Error("All fields must be filled!");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  if (password !== reTypePass) {
    throw Error("Passwords do not match");
  }

  const emailExist = await this.findOne({ email });

  if (emailExist) {
    throw Error("Email already in use");
  }

  const personalIDExist = await this.findOne({ personalID });

  if (personalIDExist) {
    throw Error("Personal ID already in use");
  }

  const phoneExist = await this.findOne({ phone });

  if (phoneExist) {
    throw Error("Phone number already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({
    firstname,
    surname,
    email,
    personalID,
    phone,
    password: hash,
  });

  return user;
};

//static login method

userSchema.statics.login = async function(identifier, password) {
    if (!identifier || !password) {
        throw Error('All fields must be filled!');
    }

    const user = await this.findOne({
        $or: [{ email: identifier }, { personalID: identifier }]
    });

    if (!user) {
        throw Error('Incorrect email or personal ID');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw Error('Incorrect password');
    }

    return user;
};

module.exports = mongoose.model("User", userSchema);
