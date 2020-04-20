const express = require('express')
const app = express()

require('./db/db')

app.set('view engine', 'ejs');

app.use(express.json(), express.urlencoded({ extended: true }));

const signup = require('./routes/signup')
const login = require('./routes/login')
const contacts = require('./routes/contacts')


app.use('/', signup)
app.use('/', login)
app.use('/', contacts)

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('loaded on port 3000')
})