import mongoose from 'mongoose'
import connectToDatabase from '../lib/connectToDb.js'
import memberData from './data/members.js'
import Member from '../models/member.js'
import User from '../models/user.js'
import userData from './data/users.js'
import Course from '../models/course.js'
import courseData from './data/courses.js'

async function seedDatabase() {
  try {
    await connectToDatabase()

    console.log('🤖 Database connected')

    await mongoose.connection.db.dropDatabase()

    console.log('🤖 Database dropped')

    const users = await User.create(userData)

    console.log(`🤖 ${users.length} users created`)

    const courses = await Course.create(courseData)

    console.log(`🤖 ${courses.length} courses created`)

    const membersWithOwner = memberData.map(member => {
      member.owner = users[0]._id
      return member
    })

    const members = await Member.create(membersWithOwner)

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