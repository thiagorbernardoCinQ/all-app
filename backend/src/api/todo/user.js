const restful = require('node-restful')
const mongoose = restful.mongoose

const actSchema = new mongoose.Schema({
    username: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    correr: {type: Number},
    dormir: {type: Number},
    andar: {type: Number},
})

const userSchema = new mongoose.Schema({
    oi: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

module.exports = restful.model('User', userSchema)
module.exports = restful.model('Act', actSchema)