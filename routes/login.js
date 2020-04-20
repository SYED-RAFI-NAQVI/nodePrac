const express = require('express')
const router = express.Router()

require('../db/db')
const { userModel } = require('../models/models')



router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }

    userModel.findOne(user, (err, user) => {
        if (err) {
            res.json({
                Message: 'Error'
            })
        }
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
