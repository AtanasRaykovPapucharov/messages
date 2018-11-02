'use strict'

/*
 * Abstract Mongoose DB service object
 *
 */

module.exports = {
    getAll: (collection) => {
        return new Promise((resolve, reject) => {
            collection.find({}, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    },
    getById: (collection, id) => {
        return new Promise((resolve, reject) => {
            collection.findOne({ _id: id }, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    },
    post: (collection, newObject) => {
        return new Promise((resolve, reject) => {
            collection.create(newObject, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    },
    update: (collection, id, updateObject) => {
        return new Promise((resolve, reject) => {
            collection.findOneAndUpdate({
                _id: id
            }, updateObject, {
                multi: false
            }, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    },
    delete: (collection, id) => {
        return new Promise((resolve, reject) => {
            collection.findOneAndDelete({
                _id: id
            }, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    }
}