import mongoose from 'mongoose'

const membersSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  handicap: { type: String, required: true },
  homeCourse: { type: String, required: true }, 
  favCoursePlayed: { type: String, required: true }, 
  bestGolfMemory: { type: String, required: true },
  lowestRound: { type: String, required: true },
  favShot: { type: String, required: true }, 
  weakness: { type: String, required: true },
  bestFinish: { type: String, required: true }, 
  favLCMemory: { type: String, required: true }, 
})

export default mongoose.model('Member', membersSchema)