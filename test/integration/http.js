const request = require('superagent')
const URL = 'http://localhost:3333/api/message'

module.exports = (expect) => {
    describe('ajax request integration tests', () => {
        describe('GET /api/message', () => {
            it('responds with status 200', done => {
                request
                    .get(URL)
                    .end((err, res) => {
                        expect(res.status).to.eql(200)
                        done()
                    })
            })
            it('responds with header content-type: application/json', done => {
                request
                    .get(URL)
                    .end((err, res) => {
                        expect(res.headers['content-type'].includes('application/json')).to.eql(true)
                        done()
                    })
            })
        })
    })
}