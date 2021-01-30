/**
 * Controllers
 * - have methods that attached to specific routes
 * - interact with the database through mongoose (a object data modeling library for mongodb), thus async nature
 *   [read more]: https://mongoosejs.com/docs/api.html
 * - handle request.body and generate response status code and return json data
 */

const mongoose = require('mongoose')
const Dog = require('../models/dog.model')

/**
 * Request mongodb asynchronously and send all dogs data back in http response body
 * Execute when http GET request hit /api/dogs url route
 * @param {*} res http response
 */
exports.getAllDogs = async (res) => {
  try {
    const data = await Dog.find()
    res.json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

/**
 * Request mongodb asynchronously by dog id and send data back in http response body
 * Execute when http GET request hit /api/dogs/:id url route
 * @param {*} req http request
 * @param {*} res http response
 */
exports.getDogById = async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    try {
      const data = await Dog.findById(req.params.id)
      return data ? res.json(data) : res.status(404).json('Dog not found')
    } catch (error) {
      return res.status(500).json(error)
    }
  }
  return res.status(400).json('Invalid objectId')
}

// POST /api/dogs
exports.addDog = async (req, res) => { }

// PUT /api/dogs/:id
exports.updateDogById = async (req, res) => { }

// DELETE /api/dogs/:id
exports.deleteDogById = async (req, res) => { }
