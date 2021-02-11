const mongoose = require('mongoose')
const { User } = require('../../models')

describe('User Model', () => {
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
    mobileNumber: '+61 412 341 234',
    password: 'SuperSecretPassword321'
  }

  test('should be able to create and save a new user with a hashed password', async () => {
    // Alternatively, use User.create().
    const unsavedUser = new User(userData)
    const newUser = await unsavedUser.save()

    expect(newUser.firstName).toBe(userData.firstName)
    expect(newUser.lastName).toBe(userData.lastName)
    expect(newUser.email).toBe(userData.email)
    expect(newUser.mobileNumber).toBe(userData.mobileNumber)

    // Should not be the same password due to hashing.
    expect(newUser.password).not.toBe(userData.password)
  })

  test('should normalize email addresses for users', async () => {
    const email = 'avi.santoso@gmail.com'
    const normalizedEmail = 'avisantoso@gmail.com'

    const unsavedUser = new User({ ...userData, email })
    const newUser = await unsavedUser.save()

    expect(newUser.email).toBe(normalizedEmail)
  })

  test('should not allow creating multiple users with the same email address', async () => {
    // Note, emailOne and emailTwo are considered the same email address for gmail.
    const emailOne = 'avi.santoso@gmail.com'
    const emailTwo = 'a.v.i.santoso@gmail.com'

    const userOne = new User({ ...userData, email: emailOne })
    await userOne.save()

    expect(async () => {
      const userTwo = new User({ ...userData, email: emailTwo })
      await userTwo.save()
    }).rejects.toThrow('same email address')
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
