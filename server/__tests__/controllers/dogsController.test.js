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
    const doggo = await dogsController.create({ ...doggyData })

    expect(doggo.imageLink).toBe(doggyData.imageLink)
    expect(doggo.name).toBe(doggyData.name)
    expect(doggo.age).toBe(doggyData.age)
    expect(doggo.breed).toBe(doggyData.breed)
    expect(doggo.sex).toBe(doggyData.sex)
    expect(doggo.size).toBe(doggyData.size)
    expect(doggo.adoptionFee).toBe(doggyData.adoptionFee)

    await doggo.delete()
  })
})
