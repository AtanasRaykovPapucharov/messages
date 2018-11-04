const messageData = require('../../../app/server/data/message/message-data')

module.exports = chai => {
    const expect = chai.expect
    const response = 'yey'
    const requesterStub = {
        getAll: (a) => {
            return a
        },
        getById: (a) => {
            return a
        },
        post: (a) => {
            return a
        },
        delete: (a) => {
            return a
        },
        update: (a) => {
            return a
        }
    }

    describe('MessageData methods test', () => {
        it('expects "getAll" have been called and returns', done => {
            let data = messageData(response, requesterStub).getAll()
            expect(data).to.eql(response)
            done()
        })
    })

    describe('MessageData methods test', () => {
        it('expects "getById" have been called and returns', done => {
            let data = messageData(response, requesterStub).getById()
            expect(data).to.eql(response)
            done()
        })
    })

    describe('MessageData methods test', () => {
        it('expects "post" have been called and returns', done => {
            let data = messageData(response, requesterStub).post()
            expect(data).to.eql(response)
            done()
        })
    })

    describe('MessageData methods test', () => {
        it('expects "delete" have been called and returns', done => {
            let data = messageData(response, requesterStub).delete()
            expect(data).to.eql(response)
            done()
        })
    })

    describe('MessageData methods test', () => {
        it('expects "update have been called and returns', done => {
            let data = messageData(response, requesterStub).update()
            expect(data).to.eql(response)
            done()
        })
    })
}