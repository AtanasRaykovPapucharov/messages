import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {
  render() {
    return (
      <article className="Message">
        <h2>{this.props.name} says: </h2>
        <p>{this.props.message}</p>
        <button>Edit</button>
        <button>Delete</button>
        <hr />
      </article>
    )
  }
}

export default Message

Message.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string
}
