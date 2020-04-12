const express = require('express')
const app = express()

require('./db/db')

app.set('view engine', 'ejs');


app.get('/signup', (req, res) => {
    res.render('signup')
})

app.post('/signup', (req, res) => {
    console.log(req)
    // res.send(req.body.name)
    res.send(req)
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