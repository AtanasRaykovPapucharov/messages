'use strict'

/*
 * Message data service
 *
 */

module.exports = (messages, requester) => {
    return {
        getAll: () => {
            return requester.getAll(messages)
        },
        getById: (id) => {
            return requester.getAll(messages, id)
        },
        post: (newMsg) => {
            return requester.post(messages, newMsg)
        },
        delete: (id) => {
            return requester.delete(messages, id)
        },
        update: (id, updateMsg) => {
            return requester.update(messages, id, updateMsg)
        }
    }
}