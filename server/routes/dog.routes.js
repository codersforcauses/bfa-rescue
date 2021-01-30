/**
 * Route
 * maps the http request methods with the route urls and call actions in controllers
 * base dog api route defined in app.js as /api/dogs
 */

const express = require('express')
const router = express.Router()
const dogController = require('../controllers/dog.controllers')

router.get('/', dogController.getAllDogs)
router.get('/:id', dogController.getDogById)
router.post('/', dogController.addDog)
router.put('/:id', dogController.updateDogById)
router.delete(':id', dogController.deleteDogById)

module.exports = router
