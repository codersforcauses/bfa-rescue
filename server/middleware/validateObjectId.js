// used to check if the id parameter specified in the http request is with valid mongoose ObjectId format
// if unhandled will cause error
// to use it, put it between route and controller in routes, separate by ","

const mongoose = require('mongoose')

module.exports = (req, res, next) => {
  // end the request-response lifecycle
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid objectId' })
  }
  // not end the request-response lifecycle, pass control to the next middleware function
  next()
}
