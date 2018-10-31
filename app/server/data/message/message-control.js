'use strict'

module.exports = (data, Model) => {
  return {
    getAll: (req, resp) => {
      console.log(req.headers)

      return data.getAll().then(data => {
        return resp.json(data)
      })
    },
    post: (req, resp) => {
      let newModel = new Model(req.body)

      return data.post(newModel).then(data => {
        return resp.json(data)
      })
    },
    delete: (req, resp) => {
      return data.delete(req.body.id).then(data => {
        return resp.json(data)
      })
    },
    update: (req, resp) => {
      let updateObj = JSON.parse(req.body.updateObj)

      return data.update(req.body.id, updateObj).then(data => {
        return resp.json(data)
      })
    }
  }
}
