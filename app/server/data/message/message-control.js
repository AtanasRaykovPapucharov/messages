'use strict'

/*
 * Message HTTP controller
 *
 */

module.exports = (messages, Model) => {
  return {
    getAll: (req, resp) => {
      try {
        return messages.getAll()
          .then(data => {
            return resp.status(200).json(data)
          })
          .catch(err => {
            return resp.status(400)
          })
      } catch (error) {
        throw new Error('Message control "getAll" error: ' + error)
      }
    },
    getById: (req, resp) => {
      try {
        return messages.getById(req.params.id)
          .then(data => {
            return resp.status(200).json(data)
          })
          .catch(err => {
            return resp.status(400)
          })
      } catch (error) {
        throw new Error('Message control "getById" error: ' + error)
      }
    },
    post: (req, resp) => {
      let newModel = new Model(req.body)

      try {
        return messages.post(newModel)
          .then(data => {
            return resp.status(200).json(data)
          })
          .catch(err => {
            return resp.status(400)
          })
      } catch (error) {
        throw new Error('Message control "post" error: ' + error)
      }
    },
    delete: (req, resp) => {
      try {
        return messages.delete(req.body.id)
          .then(data => {
            return resp.status(200).json(data)
          })
          .catch(err => {
            return resp.status(400)
          })
      } catch (error) {
        throw new Error('Message control "delete" error: ' + error)
      }
    },
    update: (req, resp) => {
      const id = req.body.id
      const updateObj = req.body.updateObj

      try {
        return messages.update(id, updateObj)
          .then(data => {
            return resp.status(200).json(data)
          })
          .catch(err => {
            return resp.status(400)
          })
      } catch (error) {
        throw new Error('Message control "update" error: ' + error)
      }
    }
  }
}