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

async function create(dog) {
  try {
    const newDog = new Dog(dog)
    return await newDog.save()
  } catch (error) {
    throw new StatusCodeError(500, error.message)
  }
}

async function deleteById(id) {
  try {
    const { deletedCount } = await Dog.deleteOne({ id })

    if (deletedCount === 0) {
      throw new StatusCodeError(404, `A dog with the id ${id} does not exist.`)
    }

    return deletedCount
  } catch (error) {
    throw new StatusCodeError(500, error.message)
  }
}

const dogsController = {
  getAll,
  get,
  getById,
  create,
  deleteById
}

module.exports = dogsController
