const sinon = require('sinon')
const expressConfig = require('../../../app/server/config/express')

module.exports = chai => {
    const expect = chai.expect

    describe('Express config function test', () => {
        it('should verify it has 1 input parameter', done => {
            expect(expressConfig.length).to.eql(1)
            done()
        })

        it('should verify express config is called and throws error', done => {
            const fake = sinon.fake()
            
            expect(expressConfig(fake)).to.eql('Express config error!')
            done()
        })
    })
}