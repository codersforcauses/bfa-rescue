const User = require('./models/users')

const createUser = async () => {
  await User.deleteMany({})
  const user = new User({
    username: 'hello'
  })
  await user.save()
}

createUser()
