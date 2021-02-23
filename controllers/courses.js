import Course from '../models/course.js'
// import { notFound } from '../lib/errorHandler.js'
// import mongoose from 'mongoose'

// * GETTING ALL COURSES

async function courseIndex(_req, res, next){
  try {
    const courses = await Course.find()
    return res.status(200).json(courses)
  } catch (err) {
    next(err)
  }
}

export default {
  index: courseIndex,
  // create: countryCreate,
  // show: memberShow,
  // update: countryUpdate,
  // delete: countryDelete,
}