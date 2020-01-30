const express = require('express')

module.exports = function (server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const userService = require('../api/users/userService')
    userService.register(router, '/users')
}