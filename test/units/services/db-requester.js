const sinon = require('sinon')
const requester = require('../../../app/server/services/db-requester')

module.exports = (expect) => {
    describe('DB requester service tests', () => {
        it('returns object with the right methods', done => {
            const requesterMock = sinon.mock(requester)

            requesterMock.expects('getAll').once().throws()
            requesterMock.expects('getById').once().throws()
            requesterMock.expects('post').once().throws()
            requesterMock.expects('update').once().throws()
            requesterMock.expects('delete').once().throws()

            requesterMock.verify
            done()
        })
    })
}