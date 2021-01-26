const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    sex: {
      type: String,
      enum: ['male', 'female'],
      require: true
    },
    age: {
      type: Number,
      required: true
    },
    breed: {
      type: String,
      required: true
    },
    size: {
      type: String,
      enum: ['small', 'medium', 'large'],
      require: true
    },
    adoption_fee: {
      type: Number,
      required: true
    },
    adoption_available: {
      type: Boolean
    },
    foster_available: {
      type: Boolean
    },
    sponsor_available: {
      type: Boolean
    },
    rehomed: {
      type: Boolean
    },
    description: {
      type: String
    }
  },
  { timestamps: true }
)

const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog
