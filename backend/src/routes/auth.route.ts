import express from 'express'
import { signup, login } from '../controllers/auth.controller'
import passport from '../auth/passport'

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({ user: req.user })
})

export default router;
