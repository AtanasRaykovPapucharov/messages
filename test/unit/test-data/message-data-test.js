const sinon = require('sinon')
const messageData = require('../../../app/server/data/message/message-data')
const requester = require('../../../app/server/services/db-requester')

module.exports = chai => {
    const expect = chai.expect
    
    let data
    let messageDataMock
    let requesterMock

    describe('MessageData has the right methods test', () => {

        beforeEach(() => {
            const collectionName = 'example'
            requesterMock = sinon.mock(requester)
            data = messageData(collectionName, requesterMock)
            messageDataMock = sinon.mock(data)
        })    
        
        afterEach(() => {
            requesterMock.restore()
            messageDataMock.restore()
        })

        it('should verify that "getAll" is called', done => {
            messageDataMock.expects('getAll').once().throws()
            messageDataMock.verify
            done()
        })

        it('should verify that "getById" is called', done => {
            messageDataMock.expects('getById').once().throws()
            messageDataMock.verify
            done()
        })

        it('should verify that "post" is called', done => {
            messageDataMock.expects('post').once().throws()
            messageDataMock.verify
            done()
        })

        it('should verify that "update" is called', done => {
            messageDataMock.expects('update').once().throws()
            messageDataMock.verify
            done()
        })

        it('should verify that "delete" is called', done => {
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

    describe('MessageData methods test', () => {
        it('should verify getAll method is called', done => {
            sinon.stub(messageData, 'getAll')
            messageData.getAll.yields('result')

            let spy = sinon.spy()

            let data = messageData('name', spy).getAll()

            expect(data).to.eql('result')
            messageData.getAll.restore()
            done()
        })
    })
}