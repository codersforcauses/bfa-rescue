const mongoose = require('mongoose')
const validator = require('validator').default

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: function (value) {
          return validator.isEmail(validator.normalizeEmail(value))
        },
        message: (props) => `${props.value} is not a valid email address.`
      }
    },
    mobileNumber: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: function (value) {
          return validator.isMobilePhone(value, 'en-AU')
        },
        message: (props) =>
          `${props.value} is not a valid Australian mobile number.`
      }
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports = User
