const mongoose = require('mongoose')

const { User } = require('../../models')
const { usersController } = require('../../controllers')

describe('Users Controller', () => {
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

  test('should be able to register a new user', async () => {
    const newUser = await usersController.register(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.mobileNumber,
      userData.password
    )

    expect(newUser).toBeDefined()
    expect(newUser.firstName).toBe(cleanUserData.firstName)
    expect(newUser.lastName).toBe(cleanUserData.lastName)
    expect(newUser.email).toBe(cleanUserData.email)
    expect(newUser.mobileNumber).toBe(cleanUserData.mobileNumber)

    // After hashing passwords should be different.
    expect(newUser.password).not.toBe(cleanUserData.password)

    await newUser?.delete()
  })

  test('should be able to login a previously registered user', async () => {
    const newUser = await usersController.register(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.mobileNumber,
      userData.password
    )

    const { success, token } = await usersController.login(
      userData.email,
      userData.password
    )

    expect(success).toBe(true)
    expect(token).toBeDefined()

    await newUser?.delete()
  })

  test('should not be able to login with a wrong password', async () => {
    const newUser = await usersController.register(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.mobileNumber,
      userData.password
    )

    expect(async () => {
      await usersController.login(userData.email, 'wrongpassword123')
    }).rejects.toThrow('does not match')

    await newUser?.delete()
  })

  test('should not be able to register a new user with a non-australian phone number', async () => {
    let newUser
    expect(async () => {
      newUser = await usersController.register(
        userData.firstName,
        userData.lastName,
        userData.email,
        '2412341234',
        userData.password
      )
    }).rejects.toThrow('not a valid Australian mobile number')
    await newUser?.delete()
  })

  test('should not be able to register a new user with a non-valid email address', async () => {
    let newUser
    expect(async () => {
      newUser = await usersController.register(
        userData.firstName,
        userData.lastName,
        'avi.santoso123.com',
        userData.mobileNumber,
        userData.password
      )
    }).rejects.toThrow('not a valid email address')
    newUser?.delete()
  })
})
