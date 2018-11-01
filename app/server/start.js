'use strict'

/*
 * Express server main file
 *
 */

module.exports = () => {
    // App Server
    const express = require('express')
    const server = express()

    // App Environment Mode
    const env = process.env.NODE_ENV || 'development'

    // App Constants
    const params = require('./config')[env]

    // Express configuration
    require('./config/express')(server)

    // Database
    const mongoose = require('mongoose')
    const dbConnection = params.db
    const dbCollections = ['message']

    const db = require('./config/mongoose')(mongoose, dbConnection, dbCollections)

    const controller = require('./config/controller')(db, dbCollections)

    // Routing configuration
    require('./config/routes')(server, controller, dbCollections)

    const port = params.port
    server.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })

    return server
}