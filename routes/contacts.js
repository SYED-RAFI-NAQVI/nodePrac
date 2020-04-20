const express = require('express')
const router = express.Router()

require('../db/db')
const { contactModel } = require('../models/models')



router.get('/contacts', (req, res) => {
    contactModel.find().then((result) => {
        res.render('contact', { contacts: result })
    }).catch((err) => {
        console.log(err)
    })
})


router.post('/contacts', (req, res) => {
    const contact = new contactModel({
        name: req.body.name,
        contact: req.body.contact
    })

    contact.save().then((result) => {
        res.redirect('contacts')
    }).catch((err) => {
        console.log(err)
    })
})

router.get('/del/:id', (req, res) => {
    contactModel.findOneAndDelete(req.params.id).then(() => {
        res.redirect('/contacts')
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router