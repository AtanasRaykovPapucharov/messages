const mongoose = require('mongoose')
const pathToServerData = '../../../app/server/data'
const Message = require(`${pathToServerData}/message/message-model`).init(mongoose)

module.exports = (expect) => {

    describe('MessageModel test', () => {
        it('should validate that message model could not be instanced without required parameters passed', done => {
            const msg = new Message()

            msg.validate(err => {
                expect(err.errors.author).to.exist
                expect(err.errors.content).to.exist
                done()
            })
        })

        it('should validate that message model could not be instanced with not defined parameters passed', done => {
            const msg = new Message({water: '', smart: ''})

            msg.validate(err => {
                expect(err.errors.water).to.not.exist
                expect(err.errors.smart).to.not.exist
                done()
            })
        })
    })
}