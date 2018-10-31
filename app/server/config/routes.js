'use strict'

/*
 * App Router configuration
 *
 */

const rootResponseObject = {
    'status': 200,
    'message': 'API User connected!',
    'routes': ['/api/message'],
    'PS': 'To prettify, add /?pretty'
}

module.exports = (router, controller, collections) => {

    // root route
    router.get('/', (req, resp) => {
        console.log('API User connected!')
        resp.status(200).json(rootResponseObject)
    })

    // all collections routes
    collections.forEach(element => {
        router.get(`/api/${element}`, controller[element].getAll)
        router.post(`/api/${element}`, controller[element].post)
        router.put(`/api/${element}`, controller[element].update)
        router.delete(`/api/${element}`, controller[element].delete)
    })

    // all not existing routes
    router.get('*', (req, resp) => {
        resp.redirect('/')
    })
}