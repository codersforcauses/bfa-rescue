require('dotenv').config()

// set env variables to use
const PORT = parseInt(process.env.PORT || '3000')
const HOST = process.env.HOST || 'localhost'
const MONGODB_URI = process.env.DB_URL || 'mongodb://localhost:27017/bfa-rescue'
const SECRET_KEY = process.env.SECRET_KEY || 'wowverybiscitmanypats'

module.exports = { PORT, HOST, MONGODB_URI, SECRET_KEY }
