const express = require('express')
const logger = require('morgan')
const compress = require('compression')
const helmet = require('helmet')
const cors = require('cors')

require('dotenv').config()

// import routes
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

// set env variables to use
const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'
const mongodb = process.env.DB_URL || 'mongodb://localhost:27017/bfa-rescue'

const app = express()

// set middleware for express to use from package imports
app.use(helmet())
app.use(cors())
app.use(compress())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// set routes to use
app.use('/', indexRouter)
app.use('/users', usersRouter)

/*
* set global variables for express to use in any file;
* using app.get('<variable-name>', <variable-name>)
*/
app.set('host', host)
app.set('port', port)
app.set('mongodb', mongodb)

module.exports = app
