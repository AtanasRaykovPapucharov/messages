import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
class AddForm extends Component {
  render() {
    let redirect = () => (<Redirect from="/new" to="/all"/>)
    return (
      <form className="App-form" method="POST" action="http://localhost:3333/api/message">
        <h2>New Message</h2>
        <label htmlFor="author">from </label>
        <input type="text" name="author"/>
        <br />
        <br />
        <textarea name="content" cols="30" rows="10" />
        <br />
        <input onClick={redirect} className="App-btn" type="submit" value="Submit" />
        <hr />
      </form>
    )
  }
}

export default AddForm
