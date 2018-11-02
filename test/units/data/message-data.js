const sinon = require('sinon')
const messageData = require('../../../app/server/data/message/message-data')
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

module.exports = (expect) => {
    let data

    beforeEach(() => {
        const collectionName = 'example'
        const requesterMock = sinon.mock(requester)
        data = messageData(collectionName, requesterMock)
    })

    describe('MessageData has the right methods test', () => {
        it('should verify that "getAll" is called once', done => {
            const messageDataMock = sinon.mock(data)

            messageDataMock.expects('getAll').once().throws()

            messageDataMock.verify
            done()
        })

        it('should verify that "getById" is called once', done => {

            const messageDataMock = sinon.mock(data)

            messageDataMock.expects('getById').once().throws()

            messageDataMock.verify
            done()
        })

        it('should verify that "post" is called once', done => {

            const messageDataMock = sinon.mock(data)

            messageDataMock.expects('post').once().throws()

            messageDataMock.verify
            done()
        })

        it('should verify that "update" is called once', done => {

            const messageDataMock = sinon.mock(data)

            messageDataMock.expects('update').once().throws()

            messageDataMock.verify
            done()
        })

        it('should verify that "delete" is called once', done => {

            const messageDataMock = sinon.mock(data)

            messageDataMock.expects('delete').once().throws()

            messageDataMock.verify
            done()
        })
    })

    describe('MessageData methods input parameters test', () => {
        it('should verify "getAll" method has no input parameters', done => {
            expect(data.getAll.length).to.eql(0)

            done()
        })

        it('should verify "getById" method has 1 input parameter', done => {
            expect(data.getById.length).to.eql(1)

            done()
        })

        it('should verify "post" method has 1 input parameter', done => {
            expect(data.post.length).to.eql(1)

            done()
        })

        it('should verify "update" method has 2 input parameters', done => {
            expect(data.update.length).to.eql(2)

            done()
        })

        it('should verify "delete" method has 1 input parameter', done => {
            expect(data.delete.length).to.eql(1)

            done()
        })
    })
}