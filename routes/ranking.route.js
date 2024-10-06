import express from 'express'

import { addTeams, getRank, updateRanks } from '../controllers/ranking.controller.js'
import { authenticateUser, authorizeAdmin } from '../middleware/auth.middleware.js'

const router = express.Router()

router.get('/ranks',authenticateUser, getRank)
router.post('/teams',authenticateUser, authorizeAdmin, addTeams)
router.put('/update/:id',authenticateUser, authorizeAdmin, updateRanks)

export default router