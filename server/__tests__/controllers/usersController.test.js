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

  const userData = {
    firstName: 'Aviciena',
    lastName: 'Santoso',
    email: 'avi.santoso@gmail.com',
    mobileNumber: '0412341234',
    password: 'SuperSecretPassword321'
  }

  const cleanUserData = {
    firstName: 'Aviciena',
    lastName: 'Santoso',
    email: 'avisantoso@gmail.com',
    mobileNumber: '+61 412 341 234',
    password: 'SuperSecretPassword321'
  }

  test('should be able to create a user', async () => {
    const newUser = usersController.register(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.mobileNumber,
      userData.password
    )
    expect(newUser).toBeDefined()
    expect(newUser.firstName).toBe(cleanUserData.firstName)
    expect(newUser.lastName).toBe(cleanUserData.lastName)
    expect(newUser.email).toBe(cleanUserData.firstName)
    expect(newUser.mobileNumber).toBe(cleanUserData.mobileNumber)
    expect(newUser.password).toBe(cleanUserData.password)
  })
})
