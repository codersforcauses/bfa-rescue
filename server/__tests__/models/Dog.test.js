const mongoose = require('mongoose')

const { Dog } = require('../../models')

const doggyData = {
  imageLink: 'http://',
  name: 'Doggo',
  age: 3.14,
  breed: 'Siberian Husky',
  sex: 'male',
  size: 'large',
  adoptionFee: 499.95
}

describe('Dog Model', () => {
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

  test('should be able to create and save a new dog', async () => {
    const doggo = new Dog({ ...doggyData })
    const savedDoggo = await doggo.save()

    expect(doggo.imageLink).toBe(savedDoggo.imageLink)
    expect(doggo.name).toBe(savedDoggo.name)
    expect(doggo.age).toBe(savedDoggo.age)
    expect(doggo.breed).toBe(savedDoggo.breed)
    expect(doggo.sex).toBe(savedDoggo.sex)
    expect(doggo.size).toBe(savedDoggo.size)
    expect(doggo.adoptionFee).toBe(savedDoggo.adoptionFee)

    await savedDoggo.delete()
  })
})
