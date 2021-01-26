module.exports = {
  async up (db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    await db.collection('users').insertOne({
      firstname: 'Test',
      lastname: 'User',
      email: 'test@bfa.com.au',
      password: 'admin456',
      createdAt: new Date(),
      updatedAt: new Date()
    })
  },

  async down (db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    await db.collection('users').deleteOne({
      firstname: 'Test',
      lastname: 'User',
      email: 'test@bfa.com.au',
      password: 'admin456'
    })
  }
}
