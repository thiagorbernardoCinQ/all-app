const restful = require('node-restful')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const mongoose = restful.mongoose
class activities {
    constructor(correr, andar, dormir) {
        this.correr = correr;
        this.andar = andar;
        this.correr = correr;
    }
}

const userSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true, minlength: 4, maxlength: 16 },
    password: { type: String, required: true, minlength: 4, maxlength: 16 },
    activities: { type},
})

userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
}, function (err) {
    next(err);
});


module.exports = restful.model('User', userSchema)
//module.exports = restful.model('Act', actSchema)
/*const actSchema = new mongoose.Schema({
    //username: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    correr: {type: Number},
    dormir: {type: Number},
    andar: {type: Number},
})*/