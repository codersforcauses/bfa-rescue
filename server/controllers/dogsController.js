const StatusCodeError = require('../helpers/StatusCodeError')
const { Dog } = require('../models')

async function getAll() {
  try {
    return await find({})
  } catch (error) {
    throw new StatusCodeError(500, error.message)
  }
}

async function get(match) {
  try {
    const dog = await Dog.find(match)

    if (!dog) {
      const criteria = Object.keys(match).join(', ')
      throw new StatusCodeError(
        404,
        `A dog matching the search criteria ${criteria} does not exist.`
      )
    }

    return dog
  } catch (error) {
    throw new StatusCodeError(500, error.message)
  }
}

async function getById(id) {
  try {
    const dog = await Dog.findById(id)

    if (!dog) {
      throw new StatusCodeError(404, `A dog with the id ${id} does not exist.`)
    }

    return dog
  } catch (error) {
    throw new StatusCodeError(500, error.message)
  }
}

async function create(
  imageLink,
  name,
  age,
  breed,
  sex,
  size,
  adoptionFee,
  description,
  adoptionAvailable,
  fosterAvailable,
  sponsorAvailable,
  rehomed
) {
  try {
    const newDog = new Dog({
      imageLink,
      name,
      age,
      breed,
      sex,
      size,
      adoptionFee,
      description,
      adoptionAvailable,
      fosterAvailable,
      sponsorAvailable,
      rehomed
    })

    return await Dog.save()
  } catch (error) {
    throw new StatusCodeError(500, error.message)
  }
}

// PUT /api/dogs/:id
exports.updateDogById = async (req, res) => {}

/**
 * Request mongodb asynchronously with id of the dog to be deleted as param
 * Delete then send the deleted document back in http response body
 * Execute when http DELETE request hit /api/dogs/:id url route
 * @param {*} req http request
 * @param {*} res http response
 */
exports.deleteDogById = async (req, res) => {
  // delete the document from mongodb via mongoose
  Dog.findByIdAndDelete(req.params.id)
    .then((deletedDocument) => {
      return deletedDocument
        ? res.json(deletedDocument)
        : res.status(404).json({ message: 'Dog not found' })
    })
    .catch((err) => {
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
