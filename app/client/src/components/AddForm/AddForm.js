import React, { Component } from 'react'
import Requester from '../../services/requester'
import { API_URL, SAVE_ALERT } from '../../services/constants'

class AddForm extends Component {

  sendAndRedirect (e) {
    e.preventDefault()

    const postForm = new FormData(e.target)
    const NewMsg = {
      author: postForm.get('author'),
      content: postForm.get('content')
    }

    Requester().post(API_URL, NewMsg)
      .then(response => {
        if(response.status === 200) {
          alert(SAVE_ALERT)
          this.props.history.push('/')
          document.location.reload()
        }
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  render() {
    return (
      <form onSubmit={this.sendAndRedirect.bind(this)} className="App-form"> 
        <h2>New Message</h2>
        <label htmlFor="author">from </label>
        <input type="text" name="author" required/>
        <br />
        <br />
        <textarea name="content" cols="30" rows="10" required/>
        <br />
        <input className="App-btn" type="submit" value="Submit"/>
        <hr />
      </form>
    )
  }
}

export default AddForm
