const mongoose = require('mongoose')

const DogSchema = new mongoose.Schema(
  {
    imageLink: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    breed: {
      type: String,
      required: true
    },
    sex: {
      type: String,
      enum: ['male', 'female'],
      require: true
    },
    size: {
      type: String,
      enum: ['small', 'medium', 'large'],
      require: true
    },
    adoptionFee: {
      type: Number,
      required: true
    },
    description: {
      type: String
    },
    adoptionAvailable: {
      type: Boolean
    },
    fosterAvailable: {
      type: Boolean
    },
    sponsorAvailable: {
      type: Boolean
    },
    rehomed: {
      type: Boolean
    }
  },
  { timestamps: true }
)

const Dog = mongoose.model('Dog', DogSchema)

module.exports = Dog
