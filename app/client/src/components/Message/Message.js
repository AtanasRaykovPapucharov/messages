import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {API_URL} from '../../services/constants'
import Requester from '../../services/requester'

class Message extends Component {
  state = {
    messages: []
  }

  editMsg() {
    return e => {
      // Check if Edit button is clicked
      if(e.target.className.includes('edit')) {
        console.log('Editing message with id: ' + this.props.id)

        const updateObject = {}

        // DOM API prompt
        const msg = prompt('Edit the message: ', this.props.message)

        if (msg !== null && msg !== '') {
          updateObject.content = msg
        } else {
          return
        }

        Requester().update(API_URL, this.props.id, updateObject)
          .then(response => {
            if(response.status === 200) {
              document.location.reload()
              alert('Message edited!')
            }
          })
          .catch(err => {
            throw new Error(err)
          })
      } 
    }
  }

  deleteMsg() {
    return e => {
      // Check if Delete button is clicked
      if(e.target.className.includes('delete')) {
        console.log('Deleting message with id: ' + this.props.id)

        // DOM API window.confirm
        if (window.confirm('This message is going to be deleted.\nAre you sure?')) {
          Requester().delete(API_URL, this.props.id)
            .then(response => {
              if(response.status === 200) {
                document.location.reload()
                console.log('Message deleted!')
              }
            })
            .catch(err => {
              throw new Error(err)
            })
        }
      }
    }
  }

  render() {
    return (
      <article className="App-message">
        <h2>{this.props.name} says: </h2>
        <p>{this.props.message}</p>
        <button className="App-btn edit" onClick={this.editMsg()}>Edit</button>
        <button className="App-btn delete" onClick={this.deleteMsg()}>Delete</button>
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
