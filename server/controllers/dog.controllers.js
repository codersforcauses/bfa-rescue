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
 * Request mongodb asynchronously with dog id as param and send data back in http response body
 * Execute when http GET request hit /api/dogs/:id url route
 * @param {*} req http request
 * @param {*} res http response
 */
exports.getDogById = async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    try {
      const data = await Dog.findById(req.params.id)
      return data ? res.json(data) : res.status(404).json('Dog not found')
    } catch (err) {
      return res.status(500).json(err)
    }
  }
  return res.status(400).json('Invalid objectId')
}

/**
 * Request mongodb asynchronously with dog data transferred obj as param in req.body
 * Create new Dog document, save to database and send document back in http response body
 * Execute when http POST request hit /api/dogs url route
 * @param {*} dogDto dog json object to save
 * @param {*} res http response
 */
exports.addDog = async ({ body: dogDto }, res) => {
  // create new dog model and map the transferred objects data to the Dog model
  const newDog = new Dog({ ...dogDto, createdAt: Date.now(), updatedAt: Date.now() })

  // save the document to mongodb via mongoose
  newDog.save()
    .then(doc => {
      console.log(doc)
      return res.json(doc)
    })
    .catch(err => {
      console.error(err)
      return res.status(500).json(err)
    })
}

// PUT /api/dogs/:id
exports.updateDogById = async (req, res) => { }

// DELETE /api/dogs/:id
exports.deleteDogById = async (req, res) => { }
