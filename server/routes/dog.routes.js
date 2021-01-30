/**
 * Route
 * - maps the http request methods with the route urls
 * - call actions in controllers
 */

const express = require('express')
const router = express.Router()
const dogController = require('../controllers/dog.controllers')

// GET /api/dogs/
router.get('/', dogController.getAllDogs)

// GET /api/dogs/:id
router.get('/:id', dogController.getDogById)

// POST /api/dogs
router.post('/', dogController.addDog)

// PUT /api/dogs/:id
router.put('/:id', dogController.updateDogById)

// DELETE /api/dogs/:id
router.delete(':id', dogController.deleteDogById)

module.exports = router
