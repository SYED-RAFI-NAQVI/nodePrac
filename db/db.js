const dotenv = require('dotenv')
dotenv.config()


const mongoose = require('mongoose')
mongoose.connect(process.env.DB_CONFIG, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('connected to db')
})