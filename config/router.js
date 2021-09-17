import express from 'express'
import members from '../controllers/members.js'
import courses from '../controllers/courses.js'
import scorecards from '../controllers/scorecards.js'

const router = express.Router()

// * Grouping those with the same address

router.route('/members')
  .get(members.index)
//   .post(members.create)

router.route('/members/:id')
  .get(members.show)
//   .put(members.update)
//   .delete(members.delete)

router.route('/courses')
  .get(courses.index)
//   .post(members.create)

router.route('/scorecards')
  .get(scorecards.index)

router.route('/scorecards/:id')
  .delete(scorecards.delete)

router.route('/scorecard-create')
  .post(scorecards.create)

export default router