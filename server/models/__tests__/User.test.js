const mongoose = require('mongoose')
const User = require('../User')

describe('User.js', () => {
  let connection
  beforeAll(async () => {
    connection = await mongoose.connect(
      global.__MONGO_URI__,
      { useNewUrlParser: true, useCreateIndex: true },
      (err) => {
        if (err) {
          console.error(err)
          process.exit(1)
        }
      }
    )
  })
  afterAll(async () => {
    await connection.close()
  })
})
