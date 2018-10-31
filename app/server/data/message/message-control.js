'use strict'

/*
 * Message HTTP controller
 *
 */

module.exports = (messages, Model) => {
  return {
    getAll: (req, resp) => {
      return messages.getAll()
        .then(data => {
          return resp.status(200).json(data)
        })
        .catch(err => {
          return resp.status(400)
        })
    },
    post: (req, resp) => {
      let newModel = new Model(req.body)

      return messages.post(newModel)
        .then(data => {
          return resp.status(200).json(data)
        })
        .catch(err => {
          return resp.status(400)
        })
    },
    delete: (req, resp) => {
      return messages.delete(req.body.id)
        .then(data => {
          return resp.status(200).json(data)
        })
        .catch(err => {
          return resp.status(400)
        })
    },
    update: (req, resp) => {
      const id = req.body.id
      const updateObj = req.body.updateObj

      return messages.update(id, updateObj)
        .then(data => {
          return resp.status(200).json(data)
        })
        .catch(err => {
          return resp.status(400)
        })
    }
  }
}