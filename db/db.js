const dotenv = require('dotenv')
dotenv.config()


const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://admin:${process.env.PASSWORD}@cluster0-euy6h.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('connected to db')
})