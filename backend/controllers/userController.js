import asyncHamdler from "express-async-handler"
import generateToken from "../utils/generateToken.js"
import User from "../models/userModel.js"

// @desc   Auth user & get token
// @route  POST /api/users/login
// @access PUBLIC

const authUser = asyncHamdler(async(req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @desc   Get user profile
// @route  GET /api/users/profile
// @access PUBLIC

const getUser = asyncHamdler(async(req, res) => {

    // const user = await User.findById({ email })
    res.send('Success')


})

export { authUser, getUser }