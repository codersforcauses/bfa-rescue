const mongoose = require('mongoose')

const connectDB = (app) => mongoose
  .connect(app.get('mongodb'), {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

module.exports = connectDB
