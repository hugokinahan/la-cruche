import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const coursesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  city: { type: String, required: true }, 
  country: { type: String, required: true }, 
  continent: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true }
})

coursesSchema.plugin(uniqueValidator)

export default mongoose.model('Course', coursesSchema)