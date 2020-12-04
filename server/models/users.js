const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    }
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports = User
