const User = require('./user')

User.methods(['get', 'post', 'put', 'delete'])
User.updateOptions({ new: true, runValidatos: true })

module.exports = User