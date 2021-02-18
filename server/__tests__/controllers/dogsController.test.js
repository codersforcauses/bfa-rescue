const mongoose = require('mongoose')

const { Dog } = require('../../models')
const { dogsController } = require('../../controllers')

const doggyData = {
  imageLink: 'http://',
  name: 'Doggo',
  age: 3.14,
  breed: 'Siberian Husky',
  sex: 'male',
  size: 'large',
  adoptionFee: 499.95
}

describe('Dogs Controller', () => {
  let connection

  beforeAll(async () => {
    connection = await mongoose.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
  })

  afterAll(async () => {
    const dogs = await Dog.find({})
    for (let i = 0; i < dogs.length; i++) {
      const dog = dogs[i]
      await dog.delete()
    }
    await connection.close()
  })

  test('should be able to create a new dog', async () => {
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
