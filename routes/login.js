const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

require('../db/db')
const { userModel } = require('../models/models')



router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', [
    check('email', "Invalid Email").isEmail(),
    check('email').custom((value, { req }) => {
        if (!value) {
            return userModel.findOne({ email: req.body.email }).then((result) => {
                if (!result) {
                    return Promise.reject('Email not Exits')
                }
            })
        }
    }),
    check('password', 'Password must contain 8-100 chars').isLength(8, 100)
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.render('login', {
            title: "Login Error",
            errors: errors.array()
        })
    }

    const user = {
        email: req.body.email,
        password: req.body.password
    }

    userModel.findOne(user, (user) => {
        if (!user) {
            res.send("Not Found 😔 <br> Come Back After Signing Up 👍")
        }
        res.json({
            id: user._id,
            Message: 'Success'
        })
    })

})


module.exports = router
