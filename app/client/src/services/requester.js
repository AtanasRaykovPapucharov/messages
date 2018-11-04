import { TYPE_JSON } from './constants'
import { fetch } from 'whatwg-fetch'

const requester = () => {
    return {
        getAll: (url) => {
            return fetch(url)
        },
        getById: (url, id) => {
            return fetch(`${url}/:${id}`)
        },
        post: (url, obj) => {
            return fetch(url, {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-Type': TYPE_JSON
                }
            })
        },
        delete: (url, id) => {
            return fetch(url, {
                method: 'DELETE',
                body: JSON.stringify({
                    id
                }),
                headers: {
                    'Content-Type': TYPE_JSON
                }
            })
        },
        update: (url, id, updateObj) => {
            return fetch(url, {
                method: 'PUT',
                body: JSON.stringify({
                    id,
                    updateObj
                }),
                headers: {
                    'Content-Type': TYPE_JSON
                }
            })
        }
    }
}

export default requester
