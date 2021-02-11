const mongoose = require('mongoose')

const { usersController } = require('../controllers')

describe('Users Controller', () => {
  let connection

  beforeAll(async () => {
    connection = await mongoose.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useCreateIndex: true
    })
  })

  afterAll(async () => {
    await connection.close()
  })

  const firstName = 'Avi'
  const lastName = 'Santoso'
  const email = 'testemail@gmail.com',

  const userData = {
    firstName: 'Avi',
    lastName: 'Santoso',
    email: 'testemail@gmail.com',
    mobileNumber: '0412341234',
    password: 'SuperSecretPassword321'
  }
})
