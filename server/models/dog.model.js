/**
 * Model
 * models are constructors compiled from Schema definitions
 * an instance of a model is called a document
 */

const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema(
  {
    imagelink: {
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
    adoption_fee: {
      type: Number,
      required: true
    },
    description: {
      type: String
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
    }
  },
  { timestamps: true }
)

const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog
