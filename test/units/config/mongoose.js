const mongooseConfig = require('../../../app/server/config/mongoose')

module.exports = (expect) => {
    describe('Mongoose config function test', () => {
        it('should verify it has 3 input parameters', done => {
            expect(mongooseConfig.length).to.eql(3)

            done()
        })
    })
}