const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true //mostra que é obrigatório
    },
    weight: {
        type: Number,
        require: true
    },
    height: {
        type: Number,
        require: true
    },
    fat: {
        type: Number,
        require: true
    },
    creatAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User