const request = require('superagent')
const URL = 'http://localhost:3333/api/message'

module.exports = chai => {
    const expect = chai.expect

    describe('ajax request integration tests', () => {

        const message = {
            author: 'Many',
            content: 'cat'
        }

        const updateObj = {
            content: 'dog'
        }

        let ids = []

        describe('GET /api', () => {
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

        describe('POST /api/message', () => {
            it('responds with status 200', done => {
                request
                    .post(URL)
                    .send(message)
                    .end((err, res) => {
                        ids.push(res.body._id)
                        expect(res.status).to.eql(200)
                        done()
                    })
            })

            it('responds with header content-type: application/json', done => {
                request
                    .post(URL)
                    .send(message)
                    .end((err, res) => {
                        ids.push(res.body._id)
                        expect(res.headers['content-type'].includes('application/json')).to.eql(true)
                        done()
                    })
            })

            it('responds with body with the same message author as requested one', done => {
                request
                    .post(URL)
                    .send(message)
                    .end((err, res) => {
                        ids.push(res.body._id)
                        expect(res.body.author).to.eql(message.author)
                        done()
                    })
            })

            it('responds with body with the same message content as requested one', done => {
                request
                    .post(URL)
                    .send(message)
                    .end((err, res) => {
                        ids.push(res.body._id)
                        expect(res.body.content).to.eql(message.content)
                        done()
                    })
            })
        })

        describe('PUT /api/message', () => {
            it('responds with status 200', done => {
                request
                    .put(URL)
                    .send({
                        id: ids[0],
                        updateObj
                    })
                    .end((err, res) => {
                        expect(res.status).to.eql(200)
                        done()
                    })
            })

            it('responds with header content-type: application/json', done => {
                request
                    .put(URL)
                    .send({
                        id: ids[1],
                        updateObj
                    })
                    .end((err, res) => {
                        ids.push(res.body._id)
                        expect(res.headers['content-type'].includes('application/json')).to.eql(true)
                        done()
                    })
            })

            it('responds with body with the same message author as requested one', done => {
                request
                    .put(URL)
                    .send({
                        id: ids[2],
                        updateObj
                    })
                    .end((err, res) => {
                        ids.push(res.body._id)
                        expect(res.body.author).to.eql(message.author)
                        done()
                    })
            })

            it('responds with body with the same message content as requested one', done => {
                request
                    .put(URL)
                    .send({
                        id: ids[3],
                        updateObj
                    })
                    .end((err, res) => {
                        ids.push(res.body._id)
                        expect(res.body.content).to.eql(message.content)
                        done()
                    })
            })
        })

        describe('DELETE /api/message', () => {
            it('responds with status 200', done => {
                request
                    .delete(URL)
                    .send({
                        id: ids[0]
                    })
                    .end((err, res) => {
                        expect(res.status).to.eql(200)
                        done()
                    })
            })

            it('responds with header content-type: application/json', done => {
                request
                    .delete(URL)
                    .send({
                        id: ids[1]
                    })
                    .end((err, res) => {
                        ids.push(res.body._id)
                        expect(res.headers['content-type'].includes('application/json')).to.eql(true)
                        done()
                    })
            })

            it('responds with body with the same message author as requested one', done => {
                request
                    .delete(URL)
                    .send({
                        id: ids[2]
                    })
                    .end((err, res) => {
                        ids.push(res.body._id)
                        expect(res.body.author).to.eql(message.author)
                        done()
                    })
            })

            it('responds with body with the same message content as requested one', done => {
                request
                    .delete(URL)
                    .send({
                        id: ids[3]
                    })
                    .end((err, res) => {
                        ids.push(res.body._id)
                        expect(res.body.content).to.eql(updateObj.content)
                        done()
                    })
            })
        })
    })
}