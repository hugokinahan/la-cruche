import Member from '../models/member.js'
import { notFound } from '../lib/errorHandler.js'

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
    const member = await Member.findById(id).populate('owner')
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