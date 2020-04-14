const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true
    }
})

const userModel = mongoose.model('User', userSchema)
const contactModel = mongoose.model('Contact', contactSchema)

module.exports = {
    userModel,
    contactModel
}
