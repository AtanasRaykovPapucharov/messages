const sinon = require('sinon')
const requester = require('../../../app/server/services/db-requester')
const mongoMock = () => {
    return {
        create: () => {},
        find: () => {},
        findOne: () => {},
        findOneAndUpdate: () => {},
        findOneAndDelete: () => {}
    }
}

module.exports = (expect, assert) => {
    describe('DB Requester service test', () => {
        it('should verify tested object returns the right methods', done => {
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