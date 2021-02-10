const User = require('./models/User')

async function main() {
  try {
    const adminUser = new User({
      firstName: 'Admin',
      email: 'admin@bfarescue.com.au',
      mobileNumber: '0412341234',
      password: 'SuperSecretPassword321'
    })
    await adminUser.save()
  } catch (error) {
    console.error(error)
  }
}

main()
