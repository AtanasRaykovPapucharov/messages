const sinon = require('sinon')
const messageControl = require('../../../app/server/data/message/message-control')

module.exports = chai => {
    const expect = chai.expect

    describe('MessageControl test', () => {
        let messageControlMock
        beforeEach(() => {
            messageControlMock = sinon.mock(messageControl('collection', {}))
        })

        afterEach(() => {
            messageControlMock.restore()
        })

        it('should verify that "getAll" is called', done => {
            messageControlMock.expects('getAll').once().throws()
            messageControlMock.verify
            done()
        })

        it('should verify that "getById" is called', done => {
            messageControlMock.expects('getById').once().throws()
            messageControlMock.verify
            done()
        })

        it('should verify that "post" is called', done => {
            messageControlMock.expects('post').once().throws()
            messageControlMock.verify
            done()
        })

        it('should verify that "update" is called', done => {
            messageControlMock.expects('update').once().throws()
            messageControlMock.verify
            done()
        })

        it('should verify that "delete" is called', done => {
            messageControlMock.expects('delete').once().throws()
            messageControlMock.verify
            done()
        })
    })
}