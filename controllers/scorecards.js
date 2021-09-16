import Scorecard from '../models/Scorecard.js'

async function scorecardIndex(_req, res, next) {
  try {
    const scorecards = await Scorecard.find()
    return res.status(200).json(scorecards)
  } catch (err) {
    next(err)
  }
}

async function scorecardCreate(req, res, next) {
  try {
    const newScorecardData = { ...req.body }
    const newScorecard = await Scorecard.create(newScorecardData)
    return res.status(201).json(newScorecard)
  } catch (err) {
    next(err)
  }
}

export default {
  index: scorecardIndex,
  create: scorecardCreate,
  // show: venueShow, 
  // update: venueUpdate, 
  // delete: venueDelete,
  // commentCreate: venueCommentCreate,
  // commentDelete: venueCommentDelete,
}