import Member from '../models/member.js'

// * GETTING ALL MEMBERS

async function memberIndex(_req, res, next){
  try {
    const members = await Member.find()
    return res.status(200).json(members)
  } catch (err) {
    next(err)
  }
}

export default {
  index: memberIndex,
  // create: countryCreate,
  // show: countryShow,
  // update: countryUpdate,
  // delete: countryDelete,
}