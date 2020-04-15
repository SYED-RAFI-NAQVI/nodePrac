const express = require('express')
const app = express()

require('./db/db')
const { userModel, contactModel } = require('./server/models')


app.set('view engine', 'ejs');

app.use(express.json(), express.urlencoded({ extended: true }));


app.get('/signup', (req, res) => {
    res.render('signup')
})

app.post('/signup', (req, res) => {
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

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
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

app.get('/contacts', (req, res) => {
    contactModel.find().then((result) => {
        res.render('viewContacts', { contacts: result })
    }).catch((err) => {
        console.log(err)
    })
})

app.post('/contacts', (req, res) => {
    const contact = new contactModel({
        name: req.body.name,
        contact: req.body.contact
    })

    contact.save().then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err)
    })
})


app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('loaded on port 3000')
})