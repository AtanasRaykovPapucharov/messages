'use strict'

/*
 * Message mongoose model
 *
 */

module.exports.init = mongoose => {
    try {
        const Schema = mongoose.Schema

        const message = new Schema({
            author: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            },
            date: {
                type: Object,
                default: new Date()
            }
        })

        const Message = mongoose.model('Message', message)

        return Message
    } catch (error) {
        throw new Error('Message model error' + error)
    }
}