import mongoose from 'mongoose'
import connectToDatabase from '../lib/connectToDb.js'
import memberData from './data/members.js'
import Member from '../models/member.js'
// import User from '../models/user.js'
// import userData from './data/users.js'

async function seedDatabase() {
  try {
    await connectToDatabase()

    console.log('🤖 Database connected')

    await mongoose.connection.db.dropDatabase()

    console.log('🤖 Database dropped')

    // const users = await User.create(userData)

    // console.log(`🤖 ${users.length} users created`)

    const members = await Member.create(memberData)

    console.log(`🤖 ${members.length} members created`)

    await mongoose.connection.close()
    console.log('🤖 Goodbye')

  } catch (err) {
    console.log('🤖 Something went wrong')
    console.log(err)

    await mongoose.connection.close()
    console.log('🤖 Goodbye')
  }
}

seedDatabase()