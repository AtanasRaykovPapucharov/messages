const request = require('superagent')
const URL = 'http://localhost:3333/api/message'

const message = {
    author: 'Many',
    content: 'cat'
}

module.exports = {
    get: () => {
        return new Promise((resolve, reject) => {
            request
                .get(URL)
                .end((err, res) => {
                    if (err) reject(err)
                    resolve(res)
                })
        })
    },
    post: () => {
        return new Promise((resolve, reject) => {
            request
                .post(URL)
                .send(message)
                .end((err, res) => {
                    if (err) reject(err)
                    resolve(res)
                })
        })
    },
    delete: (id) => {
        return new Promise((resolve, reject) => {
            request
                .delete(URL)
                .send({ _id: id })
                .end((err, res) => {
                    if (err) reject(err)
                    resolve(res)
                })
        })
    },
    update: (id, updater) => {
        return new Promise((resolve, reject) => {
            request
                .put(URL)
                .send({ _id: id, updateObj: updater })
                .end((err, res) => {
                    if (err) reject(err)
                    resolve(res)
                })
        })
    }
}