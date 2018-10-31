import React, { Component } from 'react'
class AddForm extends Component {
  render() {
    return (
      <form>
        <h2>Add New Message</h2>
        <label htmlFor="author">author: </label>
        <input type="text" name="author"/>
        <hr />
        <label htmlFor="content">content: </label>
        <textarea name="content"/>
        <hr />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default AddForm
