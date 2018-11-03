'use strict'

/*
 * Message data service
 *
 */

module.exports = (messages, requester) => {
    return {
        getAll: () => {
            try {
                return requester.getAll(messages)
            } catch (error) {
                throw new Error('Message date "geAll" error: ' + error)
            }
        },
        getById: (id) => {
            try {
                return requester.getById(messages, id)
            } catch (error) {
                throw new Error('Message date "geById" error: ' + error)
            }
        },
        post: (newMsg) => {
            try {
                return requester.post(messages, newMsg)
            } catch (error) {
                throw new Error('Message date "post" error: ' + error)
            }
        },
        delete: (id) => {
            try {
                return requester.delete(messages, id)
            } catch (error) {
                throw new Error('Message date "delete" error: ' + error)
            }
        },
        update: (id, updateMsg) => {
            try {
                return requester.update(messages, id, updateMsg)
            } catch (error) {
                throw new Error('Message date "update" error: ' + error)
            }
        }
    }
}