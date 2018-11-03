const sinon = require('sinon')
const messageControl = require('../../../app/server/data/message/message-control')

module.exports = chai => {
    const expect = chai.expect

    describe('MessageControl test', () => {
        it('should verify tested object returns the right methods', done => {
            const messageControlMock = sinon.mock(messageControl('collection', {}))

            messageControlMock.expects('getAll').once().throws()
            messageControlMock.expects('getById').once().throws()
            messageControlMock.expects('post').once().throws()
            messageControlMock.expects('update').once().throws()
            messageControlMock.expects('delete').once().throws()

            messageControlMock.verify
            done()
        })
    })
}