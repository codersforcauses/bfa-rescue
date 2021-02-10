const mongoose = require('mongoose')
const User = require('../User')

describe('User.js', () => {
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
    firstName: 'Avi',
    lastName: 'Santoso',
    email: 'testemail@gmail.com',
    mobileNumber: '0412341234',
    password: 'SuperSecretPassword321'
  }

  test('should be able to create and save a new user with a hashed password', async () => {
    // Alternatively, use User.create(). However, this will cause bcrypt to linger.
    // The reason for this is Mongoose assuming you want to push bulk documents.
    // It keeps the random number generator service open for efficiency.
    const unsavedUser = new User(userData)
    const newUser = await unsavedUser.save()

    expect(newUser.firstName).toBe(userData.firstName)
    expect(newUser.lastName).toBe(userData.lastName)
    expect(newUser.email).toBe(userData.email)

    // Normalized to international mobile number on save.
    expect(newUser.mobileNumber).toBe('+61 412 341 234')

    // Should not be the same password due to hashing.
    expect(newUser.password).not.toBe(userData.password)
  })

  test('should throw when adding of users with an invalid email address', () => {
    expect(async () => {
      const invalidData = { ...userData, email: '1234' }
      const unsavedUser = new User(invalidData)
      await unsavedUser.save()
    }).rejects.toThrow('not a valid email address')
  })

  test('should throw when adding of users with an invalid mobile number', () => {
    expect(async () => {
      const invalidData = { ...userData, mobileNumber: '1234' }
      const unsavedUser = new User(invalidData)
      await unsavedUser.save()
    }).rejects.toThrow('not a valid Australian mobile number')
  })
})
