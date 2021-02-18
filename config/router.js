import express from 'express'
import members from '../controllers/members.js'

const router = express.Router()

// * Grouping those with the same address

router.route('/members')
  .get(members.index)
//   .post(members.create)

// router.route('/members/:id')
//   .get(members.show)
//   .put(members.update)
//   .delete(members.delete)

export default router