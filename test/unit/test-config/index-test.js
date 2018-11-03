const params = require('../../../app/server/config/index')

module.exports = chai => {
    const expect = chai.expect

    describe('Environment constants test', () => {
        it('should verify environment has "development" mode', done => {
            expect(params.development != 'undefined').to.eql(true)
            done()
        })

        it('should verify environment has "production" mode', done => {
            expect(params.production != 'undefined').to.eql(true)
            done()
        })
    })
}