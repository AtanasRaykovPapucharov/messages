const sinon = require('sinon')
const requester = require('../../../app/server/services/db-requester')

module.exports = chai => {
    const expect = chai.expect

    describe('DB Requester service methods test', () => {
        it('should verify tested object returns the right methods', done => {
            const requesterMock = sinon.mock(requester)

            requesterMock.expects('getAll').once().throws()
            requesterMock.expects('getById').once().throws()
            requesterMock.expects('post').once().throws()
            requesterMock.expects('update').once().throws()
            requesterMock.expects('delete').once().throws()

            requesterMock.verify
            requesterMock.restore()
            done()
        })

        it('should verify "getAll" method returns result', done => {
            let getAllSpy = sinon.spy(requester, 'getAll')

            requester.getAll()

            expect(getAllSpy).to.not.be.null

            getAllSpy.restore()
            done()
        })

        it('should verify "getById" method returns result', done => {
            let getByIdSpy = sinon.spy(requester, 'getById')

            requester.getById()

            expect(getByIdSpy).to.not.be.null

            getByIdSpy.restore()
            done()
        })

        it('should verify "delete" method returns result', done => {
            let deleteSpy = sinon.spy(requester, 'delete')

            requester.delete()

            expect(deleteSpy).to.not.be.null

            deleteSpy.restore()
            done()
        })

        it('should verify "update" method returns result', done => {
            let updateSpy = sinon.spy(requester, 'update')

            requester.update()

            expect(updateSpy).to.not.be.null

            updateSpy.restore()
            done()
        })

        it('should verify "post" method returns result', done => {
            let postSpy = sinon.spy(requester, 'post')

            requester.post()

            expect(postSpy).to.not.be.null

            postSpy.restore()
            done()
        })
    })
}