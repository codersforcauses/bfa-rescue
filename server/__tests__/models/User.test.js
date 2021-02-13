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

  test('should be able to create and save a new user with a hashed password', async () => {
    const sampleUser = {
      firstName: 'Avi',
      lastName: 'Santoso',
      email: 'testemail@gmail.com',
      mobileNumber: '+61 423 123 123',
      password: 'SuperSecretPassword321'
    }

    // Alternatively, use User.create().
    const unsavedUser = new User(sampleUser)
    const newUser = await unsavedUser.save()

    expect(newUser.firstName).toBe(sampleUser.firstName)
    expect(newUser.lastName).toBe(sampleUser.lastName)
    expect(newUser.email).toBe(sampleUser.email)
    expect(newUser.mobileNumber).toBe(sampleUser.mobileNumber)

    // Should not be the same password due to hashing.
    expect(newUser.password).not.toBe(sampleUser.password)
  })

  test('should normalize email addresses for users', async () => {
    const sampleUser = {
      firstName: 'Avi',
      lastName: 'Santoso',
      email: 'normalize.test@gmail.com',
      mobileNumber: '+61 423 123 124',
      password: 'SuperSecretPassword321'
    }

    const normalizedEmail = 'normalizetest@gmail.com'
    const newUser = await User.create(sampleUser)
    expect(newUser.email).toBe(normalizedEmail)
  })

  test('should not allow creating multiple users with the same email address', async () => {
    // Note, emailOne and emailTwo are considered the same email address for gmail.

    const sampleOne = {
      firstName: 'Avi',
      lastName: 'Santoso',
      email: 'avi.santoso@gmail.com',
      mobileNumber: '+61 423 123 125',
      password: 'SuperSecretPassword321'
    }

    const sampleTwo = {
      firstName: 'Avi',
      lastName: 'Santoso',
      email: 'a.v.i.santoso@gmail.com',
      mobileNumber: '+61 423 123 126',
      password: 'SuperSecretPassword321'
    }

    expect(async () => {
      const userOne = await User.create(sampleOne)
      const userTwo = await User.create(sampleTwo)
      return { userOne, userTwo }
    }).rejects.toThrow('same email address')
  })

  test('should throw when adding of users with an invalid email address', () => {
    const invalidUser = {
      firstName: 'Avi',
      lastName: 'Santoso',
      email: '1234',
      mobileNumber: '+61 423 123 127',
      password: 'SuperSecretPassword321'
    }
    expect(async () => {
      await User.create(invalidUser)
    }).rejects.toThrow('not a valid email address')
  })

  test('should throw when adding of users with an invalid mobile number', () => {
    const invalidUser = {
      firstName: 'Avi',
      lastName: 'Santoso',
      email: 'throw.mobile.test@gmail.com',
      mobileNumber: '1234',
      password: 'SuperSecretPassword321'
    }
    expect(async () => {
      await User.create(invalidUser)
    }).rejects.toThrow('not a valid Australian mobile number')
  })
})
