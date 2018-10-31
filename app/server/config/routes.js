'use strict'

module.exports = (router, controller, collections) => {

    router.get('/', (req, resp) => {
        console.log('API User connected!')
    })

    collections.forEach(element => {
        router.get(`/api/${element}`, controller[element].getAll)
        router.post(`/api/${element}`, controller[element].post)
        router.put(`/api/${element}`, controller[element].update)
        router.delete(`/api/${element}`, controller[element].delete)
    })

    router.get('*', (req, resp) => {
        resp.redirect('/')
    })
}