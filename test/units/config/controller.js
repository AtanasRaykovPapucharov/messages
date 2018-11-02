const collections = ['blog', 'user', 'message']
const pathToServer = '../../../app/server'
const controller = require(`${pathToServer}/config/controller`)

module.exports = expect => {
    describe('Controller config test', () => {
        it('should returns object with the right methods', done => {
            const controllerMock = sinon.mock(controller({}, collections))

            collections.forEach(item => controllerMock.expects(item).once().throws())

            controllerMock.verify
            done()
        })
    })
}