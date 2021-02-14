const mongoose = require('mongoose')

const { User } = require('../../models')

const sampleUser = {
  firstName: 'Avi',
  lastName: 'Santoso',
  email: 'avisantoso@gmail.com',
  mobileNumber: '+61 423 123 123',
  password: 'SuperSecretPassword321'
}

describe('User Model', () => {
  let connection

  beforeAll(async () => {
    connection = await mongoose.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
  })

  afterAll(async () => {
    const users = await User.find({})
    for (let i = 0; i < users.length; i++) {
      const user = users[i]
      await user.delete()
    }
    await connection.close()
  })

  test('should be able to create and save a new user with a hashed password', async () => {
    // Alternatively, use User.create().
    const user = new User(sampleUser)
    const savedUser = await user.save()

    expect(savedUser.firstName).toBe(sampleUser.firstName)
    expect(savedUser.lastName).toBe(sampleUser.lastName)
    expect(savedUser.email).toBe(sampleUser.email)
    expect(savedUser.mobileNumber).toBe(sampleUser.mobileNumber)

    // Should not be the same password due to hashing.
    expect(savedUser.password).not.toBe(sampleUser.password)

    await savedUser.delete()
  })

  test('should normalize email addresses for users', async () => {
    const email = 'avi.santoso@gmail.com'
    const normalizedEmail = 'avisantoso@gmail.com'

    const user = new User({ ...sampleUser, email })
    const savedUser = await user.save()

    expect(savedUser.email).toBe(normalizedEmail)

    await savedUser.delete()
  })

  test('should normalize phone numbers for users', async () => {
    const mobileNumber = '0430001999'
    const normalizedMobileNumber = '+61 430 001 999'

    const user = new User({ ...sampleUser, mobileNumber })
    const savedUser = await user.save()

    expect(savedUser.mobileNumber).toBe(normalizedMobileNumber)

    await savedUser.delete()
  })

  test('should throw when creating multiple users with the same email address', async () => {
    // Note, emailOne and emailTwo are considered the same email address.

    const sampleOne = {
      ...sampleUser,
      email: 'avi.santoso@gmail.com',
      mobileNumber: '+61 423 123 125'
    }

    const sampleTwo = {
      ...sampleUser,
      email: 'a.v.i.santoso@gmail.com',
      mobileNumber: '+61 423 123 125'
    }

    const userOne = new User(sampleOne)
    const userTwo = new User(sampleTwo)

    expect(async () => {
      await userOne.save()
      await userTwo.save()
    }).rejects.toThrow('duplicate key error')

    await userOne.delete()
    await userTwo.delete()
  })

  test('should throw when creating multiple users with the same mobile number', async () => {
    const sampleOne = {
      ...sampleUser,
      email: 'admin.one@gmail.com',
      mobileNumber: '0430001999'
    }

    const sampleTwo = {
      ...sampleUser,
      email: 'admin.two@gmail.com',
      mobileNumber: '0430001999'
    }

    const userOne = new User(sampleOne)
    const userTwo = new User(sampleTwo)

    expect(async () => {
      await userOne.save()
      await userTwo.save()
    }).rejects.toThrow('duplicate key error')

    await userOne.delete()
    await userTwo.delete()
  })

  test('should throw when adding users with an invalid email address', async () => {
    const user = new User({
      ...sampleUser,
      email: '1234'
    })

    expect(async () => {
      await user.save()
    }).rejects.toThrow('not a valid email address')

    await user.delete()
  })

  test('should throw when adding users with an invalid mobile number', async () => {
    const user = new User({
      ...sampleUser,
      mobileNumber: '1234'
    })

    expect(async () => {
      await user.save()
    }).rejects.toThrow('not a valid Australian mobile number')

    await user.delete()
  })
})
