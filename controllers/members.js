import Member from '../models/member.js'
import { notFound } from '../lib/errorHandler.js'
// import mongoose from 'mongoose'

// * GETTING ALL MEMBERS

async function memberIndex(_req, res, next){
  try {
    const members = await Member.find()
    return res.status(200).json(members)
  } catch (err) {
    next(err)
  }
}

async function memberShow(req, res, next) {
  const { id } = req.params
  try {
    // if ( !mongoose.Types.ObjectId.isValid(id) ) return false
    // mongoose.Types.ObjectId.isValid('603382d33bdb9f02d8699939')
    const member = await Member.findById(id)
    console.log(id)
    if (!member) throw new Error(notFound)
    return res.status(200).json(member)
  } catch (err) {
    next(err)
  }
}

export default {
  index: memberIndex,
  // create: countryCreate,
  show: memberShow,
  // update: countryUpdate,
  // delete: countryDelete,
}