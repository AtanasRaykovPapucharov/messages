const sinon = require('sinon')
const messageData = require('../../../app/server/data/message/message-data')
const messageControl = require('../../../app/server/data/message/message-control')
const requester = require('../../../app/server/services/db-requester')

module.exports = (expect) => {

    describe('Message Data tests', () => {
        it('returns object with the right methods', done => {
            const requesterMock = sinon.mock(requester)
            const messageDataMock = sinon.mock(messageData('collection', requesterMock))

            messageDataMock.expects('getAll').once().throws()
            messageDataMock.expects('getById').once().throws()
            messageDataMock.expects('post').once().throws()
            messageDataMock.expects('update').once().throws()
            messageDataMock.expects('delete').once().throws()

            messageDataMock.verify
            done()
        })
    })

    describe('Message Control tests', () => {
        it('returns object with the right methods', done => {
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