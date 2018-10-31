'use strict'

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
    post: (collection, obj) => {
        console.log(obj)
        
        return new Promise((resolve, reject) => {
            collection.create(obj, (err, data) => {
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
            collection.findOneAndRemove({
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