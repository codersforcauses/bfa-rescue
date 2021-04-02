const app = require('./app')

// config stuff
const connectDB = require('./config/db')

const port = app.get('port')
const server = app.listen(port)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(async (err, req, res, next) => {
  err.statusCode = err.statusCode || 500
  err.status = err.status || 'error'

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  })
})

process.on('unhandledRejection', (reason, p) =>
  console.error('Unhandled Rejection at: Promise ', p, reason)
)

// ! Do not touch, colour codes output
server.on('listening', async () => {
  console.clear()
  try {
    await connectDB(app)
    console.log('\x1b[32mDatabase connected\x1b[0m')

    // run seeder on dev and test environments
    process.env.NODE_ENV !== 'production' && require('./seeder')
  } catch (error) {
    console.error('Connection to database failed.', error)
    process.exit(1)
  }
  console.log(
    'BFA-Rescue server started on \x1b[32mhttp://%s:%d',
    app.get('host'),
    port
  )
  console.log('\x1b[33mTo restart server, type `rs`\x1b[0m')
})
