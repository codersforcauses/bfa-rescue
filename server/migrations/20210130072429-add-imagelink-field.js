module.exports = {
  async up (db) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    return db.collection('dogs').updateMany({}, { $set: { imagelink: 'https://bfarescue.com.au/wp-content/uploads/2020/11/Harley-standing-650x486.jpg' } }, false, true)
  },

  async down (db) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    return db.collection('dogs').updateMany({}, { $unset: { imagelink: 1 } }, false, true)
  }
}
