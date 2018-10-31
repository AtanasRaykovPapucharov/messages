const MessageData = {
    getAllMessages: () => {
        return fetch(this._url)
            .then(data => {
                return data.json()
            })
            .catch(err => {
                throw new Error()
            })
    },
    postNewMessage() {

    },
    updateMessage() {

    },
    deleteMessage() {

    }
}

export default MessageData