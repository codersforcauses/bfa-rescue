const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

// routes
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.set('host', host)
app.set('port', port)

module.exports = app
