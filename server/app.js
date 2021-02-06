const express = require('express')
const logger = require('morgan')
const compress = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const passport = require('passport')

require('dotenv').config()

// import secrets
const config = require('./config')

// import routes
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const app = express()

// set middleware for express to use from package imports
app.use(helmet())
app.use(cors())
app.use(compress())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Passport middleware
app.use(passport.initialize())
require('./config/passport')(passport)

// set routes to use
app.use('/', indexRouter)
app.use('/users', usersRouter)

/*
 * set global variables for express to use in any file;
 * using app.get('<variable-name>', <variable-name>)
 */
app.set('host', config.HOST)
app.set('port', config.PORT)
app.set('mongodb', config.MONGODB_URI)
app.set('secret_key', config.SECRET_KEY)

module.exports = app
