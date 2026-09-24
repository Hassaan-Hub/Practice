const monoose = require('mongoose');

const userSchema = new monoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
        unique: true
    }
}, { timestamps: true })


const userModel = monoose.model('user', userSchema)

module.exports = userModel;