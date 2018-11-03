const sinon = require('sinon')
const mongooseConfig = require('../../../app/server/config/mongoose')

module.exports = chai => {
    const expect = chai.expect

    describe('Mongoose config function test', () => {
        it('should verify it has 2 input parameters', done => {
            expect(mongooseConfig.length).to.eql(2)
            done()
        })
       
        it('should verify mongoose config is called and throws error', done => {
            const fake = sinon.fake()
            
            expect(mongooseConfig(fake, fake)).to.eql('Mongoose config error!')
            done()
        })
    })
}