'use strict'

/*
 * Mongoose configuration
 *
 */

module.exports = (mongoose, mongo) => {
    mongoose.connect(mongo, {
        useNewUrlParser: true
    })

    const db = mongoose.connection

    db.on('error', console.error.bind(console, 'DB connection error: '))

    db.on('connected', () => {
        console.log('DB connected!')
    })

    db.on('disconnected', () => {
        console.log('DB disconnected!')
    })
}