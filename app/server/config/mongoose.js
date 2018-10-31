'use strict'

module.exports = (mongoose, connectionString, collections) => {
    mongoose.connect(connectionString, {
        useNewUrlParser: true
    })

    const db = mongoose.connection

    db.on('error', console.error.bind(console, 'DB connection error: '))

    db.on('connected', () => {
        console.log('API DB connected!')
    })

    db.on('disconnected', () => {
        console.log('DB disconnected!')
    })

    const dbReq = require('../services/db-requester')
    const data = {}

    collections.forEach(element => {
        const modelPath = `../data/${element}/${element}-model`
        const dataPath = `../data/${element}/${element}-data`
        const model = require(modelPath).init(mongoose)

        data[element] = require(dataPath)(model, dbReq)
        data[`${element}Model`] = model
    })

    return data
}