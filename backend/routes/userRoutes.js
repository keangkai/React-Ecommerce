import express from 'express'
const router = express.Router()
import { authUser, getUser } from "../controllers/userController.js"

router.post('/login', authUser)
router.route('/profile').get(getUser)

export default router