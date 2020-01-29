const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({ new: true, runValidatos: true })

module.exports = Todo
/*
const User = require('./todo')

User.methods(['get', 'post', 'put', 'delete'])
User.updateOptions({ new: true, runValidatos: true })

module.exports = User*/