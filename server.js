const express = require('express')
const app = express()
const session = require('express-session')
const passport = require('passport')

require('./db/db')

app.set('view engine', 'ejs');

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true }
}))
app.use(passport.initialize())
app.use(passport.session())

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