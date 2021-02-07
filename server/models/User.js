const mongoose = require('mongoose')
const validator = require('validator').default
const bcrypt = require('bcryptjs')

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
          return validator.isEmail(value)
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

userSchema.pre('save', async function (next) {
  if (this.password && this.isModified('password')) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  }

  next()
})

userSchema.pre('save', async function (next) {
  if (this.email && this.isModified('email')) {
    this.email = validator.normalizeEmail(this.email)
  }

  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
