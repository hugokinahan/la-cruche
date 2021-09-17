import Scorecard from '../models/Scorecard.js'
import { notFound, forbidden } from './../lib/errorHandler.js'

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

async function scorecardDelete(req, res, next) {
  const { id } = req.params
  try {
    const scorecardToDelete = await Scorecard.findById(id)
    if (!scorecardToDelete) throw new Error(notFound)
    await scorecardToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

export default {
  index: scorecardIndex,
  create: scorecardCreate,
  // show: venueShow, 
  // update: venueUpdate, 
  delete: scorecardDelete,
  // commentCreate: venueCommentCreate,
  // commentDelete: venueCommentDelete,
}