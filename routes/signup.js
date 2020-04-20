const express = require('express')
const router = express.Router()

require('../db/db')
const { userModel } = require('../models/models')


router.get('/signup', (req, res) => {
    res.render('signup')
})

router.post('/signup', (req, res) => {
    const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    user.save().then(() => {
        res.send("saved")
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router