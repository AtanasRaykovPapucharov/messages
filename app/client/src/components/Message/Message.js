import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {API_URL} from '../../services/Constants'

class Message extends Component {
  update() {
    return e => {
      if(e.target.className.includes('edit')) {
        console.log('Edit - ' + this.props.id)
        let updateObject = {
          content: "Updated"
        }

        return fetch(API_URL, {
          method: 'PUT',
           body: JSON.stringify({ id: this.props.id, updateObj: updateObject }),
           headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(data => {
          alert('Message edited!')
          document.location.reload()
        })
        .catch(err => {
          throw new Error()
        })
      } else {
        console.log('Delete - ' + this.props.id)

        return fetch(API_URL, {
          method: 'DELETE',
           body: JSON.stringify({ id: this.props.id }),
           headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(data => {
          alert('Message deleted!')
          document.location.reload()
        })
        .catch(err => {
          throw new Error()
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
