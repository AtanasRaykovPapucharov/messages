const request = require('superagent')
const URL = 'http://localhost:3333/api/message'

const message = {
    author: 'Many',
    content: 'cat'
}

const updateObj = {
    content: 'dog'
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
                .send({ id: id })
                .end((err, res) => {
                    if (err) reject(err)
                    resolve(res)
                })
        })
    },
    put: (id) => {
        return new Promise((resolve, reject) => {
            request
                .put(URL)
                .send({ id: id, updateObj: updateObj })
                .end((err, res) => {
                    if (err) reject(err)
                    resolve(res)
                })
        })
    }
}