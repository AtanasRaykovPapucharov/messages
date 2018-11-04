const messageControl = require('../../../app/server/data/message/message-control')

module.exports = chai => {
    const expect = chai.expect
    const req = {
        body: {
            id: undefined,
            updateObj: undefined
        },
        params: {
            id: undefined
        },
        headers: undefined
    }

    const resp = {
        status: () => {
            return this
        },
        json: () => {
            return this
        }
    }

    const response = 'yey'

    const Model = class Model {
        constructor(a) {
            this._a = a
        }
    }

    const requesterStub = {
        getAll: () => {
            return new Promise(resolve => resolve)
        },
        getById: () => {
            return new Promise(resolve => resolve)
        },
        post: () => {
            return new Promise(resolve => resolve)
        },
        delete: () => {
            return new Promise(resolve => resolve)
        },
        update: () => {
            return new Promise(resolve => resolve)
        }
    }

    describe('MessageControl methods test', () => {

        it('expects "getAll" have been called and returns Promise', done => {
            messageControl(requesterStub, Model).getAll(req, resp).then(() => (done, done))
            done()
        })

        it('expects "getById" have been called and returns Promise', done => {
            messageControl(requesterStub, Model).getById(req, resp).then(() => (done, done))
            done()
        })

        it('expects "post" have been called and returns Promise', done => {
            messageControl(requesterStub, Model).post(req, resp).then(() => (done, done))
            done()
        })

        it('expects "delete have been called and returns Promise', done => {
            messageControl(requesterStub, Model).delete(req, resp).then(() => (done, done))
            done()
        })

        it('expects "update" have been called and returns Promise', done => {
            messageControl(requesterStub, Model).update(req, resp).then(() => (done, done))
            done()
        })
    })
}