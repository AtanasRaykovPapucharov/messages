const request = require('superagent')
const URL = 'http://localhost:3333/api/message'
const requester = require('./utils/embeddedRequester')

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
                requester.get()
                    .then(res => {
                        expect(res.status).to.eql(200)
                        done()
                    })
            })
            it('responds with header content-type: application/json', done => {
                requester.get()
                    .then(res => {
                        expect(res.headers['content-type'].includes('application/json')).to.eql(true)
                        done()
                    })
            })
        })

        describe('GET /api/message', () => {
            it('responds with status 200', done => {
                requester.get()
                    .then(res => {
                        expect(res.status).to.eql(200)
                        done()
                    })
            })
            it('responds with header content-type: application/json', done => {
                requester.get()
                    .then(res => {
                        expect(res.headers['content-type'].includes('application/json')).to.eql(true)
                        done()
                    })
            })
        })

        describe('POST /api/message', () => {
            it('responds with status 200', done => {
                requester.post()
                    .then(res => {
                        ids.push(res.body._id)
                        expect(res.status).to.eql(200)
                        done()
                    })
            })

            it('responds with header content-type: application/json', done => {
                requester.post()
                    .then(res => {
                        ids.push(res.body._id)
                        expect(res.headers['content-type'].includes('application/json')).to.eql(true)
                        done()
                    })
            })

            it('responds with body with the same message author as requested one', done => {
                requester.post()
                    .then(res => {
                        ids.push(res.body._id)
                        expect(res.body.author).to.eql(message.author)
                        done()
                    })
            })

            it('responds with body with the same message content as requested one', done => {
                requester.post()
                    .then(res => {
                        ids.push(res.body._id)
                        expect(res.body.content).to.eql(message.content)
                        done()
                    })
            })
        })

        describe('PUT /api/message', () => {
            it('responds with status 200', done => {
                requester.put(ids[0])
                    .then(res => {
                        expect(res.status).to.eql(200)
                        done()
                    })
            })

            it('responds with header content-type: application/json', done => {
                requester.put(ids[1])
                    .then(res => {
                        ids.push(res.body._id)
                        expect(res.headers['content-type'].includes('application/json')).to.eql(true)
                        done()
                    })
            })

            it('responds with body with the same message author as requested one', done => {
                requester.put(ids[2])
                    .then(res => {
                        ids.push(res.body._id)
                        expect(res.body.author).to.eql(message.author)
                        done()
                    })
            })

            it('responds with body with the same message content as requested one', done => {
                requester.put(ids[3])
                    .then(res => {
                        ids.push(res.body._id)
                        expect(res.body.content).to.eql(message.content)
                        done()
                    })
            })
        })

        describe('DELETE /api/message', () => {
            it('responds with status 200', done => {
                requester.delete(ids[0])
                    .then(res => {
                        expect(res.status).to.eql(200)
                        done()
                    })
            })

            it('responds with header content-type: application/json', done => {
                requester.delete(ids[1])
                    .then(res => {
                        ids.push(res.body._id)
                        expect(res.headers['content-type'].includes('application/json')).to.eql(true)
                        done()
                    })
            })

            it('responds with body with the same message author as requested one', done => {
                requester.delete(ids[2])
                    .then(res => {
                        ids.push(res.body._id)
                        expect(res.body.author).to.eql(message.author)
                        done()
                    })
            })

            it('responds with body with the same message content as requested one', done => {
                requester.delete(ids[3])
                    .then(res => {
                        ids.push(res.body._id)
                        expect(res.body.content).to.eql(updateObj.content)
                        done()
                    })
            })
        })
    })
}