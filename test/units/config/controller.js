const collections = ['blog', 'user', 'message']
const controller = require('../../../app/server/config/controller')

module.exports = expect => {
    describe('Controller config tests', () => {
        it('returns object with the right methods', done => {
            const controllerMock = sinon.mock(controller({}, collections))

            collections.forEach(item => controllerMock.expects(item).once().throws())

            controllerMock.verify
            done()
        })
    })
}