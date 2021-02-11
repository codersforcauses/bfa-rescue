class StatusCodeError extends Error {
  constructor(status, message) {
    super(message)
    this.name = 'StatusCodeError'
    this.status = status
  }
}

module.exports = StatusCodeError
