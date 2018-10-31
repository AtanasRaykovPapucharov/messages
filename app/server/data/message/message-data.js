'use strict'

module.exports = (messages, requester) => {
    return {
        getAll: () => {
            return requester.getAll(messages)
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