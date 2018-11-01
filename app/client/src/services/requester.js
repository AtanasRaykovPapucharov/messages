const requester = () => {
    return {
        getAll: (url) => {
            return fetch(url)
        },
        post: (url, obj) => {
            return fetch(url, {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-Type': 'application/json'
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
                    'Content-Type': 'application/json'
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
                    'Content-Type': 'application/json'
                }
            })
        }
    }
}

export default requester
