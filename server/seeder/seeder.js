const seeder = require('mongoose-seed')
const userData = require('./userSeeds.json')
const dogData = require('./dogSeeds.json')

const data = [
  {
    model: 'User',
    documents: userData
  },
  {
    model: 'Dog',
    documents: dogData
  }
]

// Connect to MongoDB via Mongoose
// const seedDB = () => seeder.connect('mongodb://localhost:27017/bfa-rescue', () => {
seeder.connect('mongodb://localhost:27017/bfa-rescue', () => {
  // Load Mongoose models
  seeder.loadModels([
    'models/user.model.js',
    'models/dog.model.js'
  ])

  // Clear specified collections
  seeder.clearModels(['User', 'Dog'], () => {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, () => {
      seeder.disconnect()
    })
  })
})
