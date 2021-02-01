/**
 * Controllers
 * - have methods that attached to specific routes
 * - interact with the database through mongoose(a object data modeling library for mongodb), thus async nature
 *   [read more](https://mongoosejs.com/docs/api.html)
 * - handle request.body and generate response status code and return json data
 */

const Dog = require('../models/dog.model')

/**
 * Request mongodb asynchronously and send all dogs data back in http response body
 * Execute when http GET request hit /api/dogs url route
 * @param {*} res http response
 */
exports.getAllDogs = async (req, res) => {
  Dog.find().then(allDogs => {
    return res.json(allDogs)
  }).catch(err => {
    return res.status(500).json({ message: err.message })
  })
  // async-await equivalent
  // try {
  //   const data = await Dog.find()
  //   return res.json(data)
  // } catch (err) {
  //   return res.status(500).json(err)
  // }
}

/**
 * Request mongodb asynchronously with dog id as param and send data back in http response body
 * Execute when http GET request hit /api/dogs/:id url route
 * @param {*} req http request
 * @param {*} res http response
 */
exports.getDogById = async (req, res) => {
  Dog.findById(req.params.id).then(foundDocument => {
    return foundDocument ? res.json(foundDocument) : res.status(404).json({ message: 'Dog not found' })
  }).catch(err => {
    return res.status(500).json({ message: err.message })
  })
  // async-await equivalent
  // try {
  //   const foundDocument = await Dog.findById(req.params.id)
  //   return foundDocument ? res.json(foundDocument) : res.status(404).json('Dog not found')
  // } catch (err) {
  //   return res.status(500).json(err)
  // }
  // }
}

/**
 * Request mongodb asynchronously with dog data transferred obj as param in req.body
 * Create new Dog document, save to database and send document back in http response body
 * Execute when http POST request hit /api/dogs url route
 * @param {*} dogDto dog json object to save, specify every field in Dog model except _id and timestamps
 * @param {*} res http response
 */
exports.addDog = async ({ body: dogDto }, res) => {
  // create new dog model with data from request.body (destructuring and renamed to dogDto)
  const newDog = new Dog({ ...dogDto, createdAt: Date.now(), updatedAt: Date.now() })

  // save the document to mongodb via mongoose
  newDog.save()
    .then(savedDocument => {
      console.log(savedDocument)
      return res.json(savedDocument)
    })
    .catch(err => {
      console.error(err)
      return res.status(500).json({ message: err.message })
    })
}

// PUT /api/dogs/:id
exports.updateDogById = async (req, res) => { }

/**
 * Request mongodb asynchronously with id of the dog to be deleted as param
 * Delete then send the deleted document back in http response body
 * Execute when http DELETE request hit /api/dogs/:id url route
 * @param {*} req http request
 * @param {*} res http response
 */
exports.deleteDogById = async (req, res) => {
  // delete the document from mongodb via mongoose
  Dog.findByIdAndDelete(req.params.id).then(deletedDocument => {
    return deletedDocument ? res.json(deletedDocument) : res.status(404).json({ message: 'Dog not found' })
  }).catch(err => {
    return res.status(500).json({ message: err.message })
  })
  // async-await equivalent
  // try {
  //   const deletedDocument = await Dog.findByIdAndDelete(req.params.id)
  //   return deletedDocument ? res.json(deletedDocument) : res.status(404).json('Dog not found')
  // } catch (err) {
  //   return res.status(500).json(err)
  // }
}
