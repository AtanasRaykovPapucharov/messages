import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {API_URL} from '../../services/constants'
import Requester from '../../services/requester'

class Message extends Component {
  state = {
    messages: []
  }
  update() {
    return e => {
      if(e.target.className.includes('edit')) {
        console.log('Edit - ' + this.props.id)

        let updateObject = {
          content: "Updated"
        }

        Requester()
          .update(API_URL, this.props.id, updateObject)
          .then(data => {
            alert('Message edited!')
            document.location.reload()
          })
          .catch(err => {
            throw new Error(err)
          })
      } else {
        console.log('Delete - ' + this.props.id)

        Requester()
          .delete(API_URL, this.props.id)
          .then(data => {
            alert('Message deleted!')
            document.location.reload()
          })
          .catch(err => {
            throw new Error(err)
          })
      }
    }
  }

  render() {
    return (
      <article className="App-message">
        <h2>{this.props.name} says: </h2>
        <p>{this.props.message}</p>
        <button className="App-btn edit" onClick={this.update()}>Edit</button>
        <button className="App-btn delete" onClick={this.update()}>Delete</button>
        <hr />
      </article>
    )
  }
}

export default Message

Message.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  message: PropTypes.string
}
