module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: '4.0.2', // MongoDB Version
      skipMD5: true
    },
    autoStart: false
  }
}
