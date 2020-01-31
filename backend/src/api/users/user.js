const restful = require('node-restful')
//const bcrypt = require('bcrypt')
const saltRounds = 10;
const mongoose = restful.mongoose

//new Date().toISOString().split('T')[0]
const userSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true, minlength: 4, maxlength: 16 },
    password: { type: String, required: true, minlength: 4, maxlength: 16 },
    activities: [{
        date: { type: Date },
        activities: [{ name: { type: String }, duration: { type: Number } }],
    }],
})

/*
userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
}, function (err) {
    next(err);
});
*/

module.exports = restful.model('User', userSchema)


/*
POST BODY

{
	"username":"kjasdfha",
	"password": "jhasdfkjhasdf",
	"activities":[{
					"date": "2020-01-30T18:42:46.609Z",
					"activities": [
							{ "name": "Almoçar", "duration": 30 },
							{ "name": "Dormir", "duration": 120 }
					]
			},
	{
					"date": "2020-01-29T18:42:46.609Z",
					"activities": [
							{ "name": "Almoçar", "duration": 30 },
							{ "name": "Cagar", "duration": 45 },
							{ "name": "Dormir", "duration": 120 }
					]
	}]
}*/

/*
{
	"username":"username",
	"password": "senha123",
	"activities":[{
					"activities": [
							{ "name": "Almoçar", "duration": 30 },
							{ "name": "Dormir", "duration": 120 }
					]
			},
	{
					"activities": [
							{ "name": "Almoçar", "duration": 30 },
							{ "name": "Dormir", "duration": 120 }
					]
	}]
}
*/