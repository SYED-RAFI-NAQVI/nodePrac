const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')

require('../db/db')
const { userModel } = require('../models/models')


router.get('/signup', (req, res) => {
    res.render('signup')
})

router.post('/signup', [
    check('name', "Name cant be empty").notEmpty(),
    check('name', "Name must Contain 4-20 chars").isLength(4, 20),
    check('email', "Invalid Email").isEmail(),
    check('email').custom(value => {
        return userModel.findOne({ email: value }).then(user => {
            if (user) {
                return Promise.reject('E-mail already in use');
            }
        })
    }),
    check('email', "Email must contain 8-100 chars").isLength(8, 200),
    check('password', "Password must be 8-100 chars").isLength(8, 100),
    check('confirmPassword').custom((value, { req }) => {
        if (value !== req.body.password || value == '') {
            throw new Error("Passwords are not matched");
        } else {
            return value;
        }
    }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('signup', {
            title: "Signup Error",
            errors: errors.array()
        })
    }

    const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    const hash = await bcrypt.hash(req.body.password, 10).then((hash) => {
        return user.password = hash
    }).catch(err => {
        throw err
    })

    user.save().then(() => {
        res.render('login')
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router