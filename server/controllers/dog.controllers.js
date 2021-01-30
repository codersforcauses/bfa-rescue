/**
 * Controllers
 * - have methods that attached to specific routes
 * - interact with the database through mongoose (a object data modeling library for mongodb), thus async nature
 *   [read more]: https://mongoosejs.com/docs/api.html
 * - handle request.body and generate response status code and return json data
 */
const Dog = require('../models/dog.model')

// GET /api/dogs/
exports.getAllDogs = async (req, res) => {
  try {
    const response = await Dog.find()
    res.json(response)
  } catch (error) {
    res.status(500).json(error)
  }
}

// GET /api/dogs/:id
exports.getDogById = async (req, res) => { }

// POST /api/dogs
exports.addDog = async (req, res) => { }

// PUT /api/dogs/:id
exports.updateDogById = async (req, res) => { }

// DELETE /api/dogs/:id
exports.deleteDogById = async (req, res) => { }
