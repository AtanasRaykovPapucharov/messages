import React, { Component } from 'react'
import Message from './components/Message/Message'
import './App.css'

const AddButton = () => {
  return (<button>Add New Message</button>)
}

class App extends Component {
  constructor() {
    super()
    this._url = 'http://localhost:3333/api/message'
  }

  state = {
    messages: []
  }

  componentDidMount() {
    this.getAllMessages()
          .then(messages => {
            let newState = this.state
            newState.messages = messages
            this.setState(newState)
          })
          .catch(err => {
            throw new Error()
          })
  }

  getAllMessages() {
    return fetch(this._url)
            .then(data => {
              return data.json()
            })
            .catch(err => {
              throw new Error()
            })
  }

  postNewMessage () {

  }

  updateMessage () {
    
  }

  deleteMessage () {
    
  }


  render() {
    const renderMessages = this.state.messages.map(msg => <Message key={msg._id} name={msg.author} message={msg.content} />)
    return (
      <div className="App">
        <header>
          < AddButton />
        </header>
        <main>
          {renderMessages}
        </main>
      </div>
    )
  }
}

export default App
