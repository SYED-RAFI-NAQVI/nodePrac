const express = require('express')
const app = express()

require('./db/db')
const userModel = require('./server/models')


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


app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('loaded on port 3000')
})