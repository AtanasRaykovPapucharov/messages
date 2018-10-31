import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Link, Switch } from 'react-router-dom'
import Message from './components/Message/Message'
import AddForm from './components/AddForm/AddForm'
import './App.css'

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
    const renderMessages = () => {
      return this.state.messages.map(msg => <Message key={msg._id} name={msg.author} message={msg.content} />)
    }
    
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Link to="all">All Messages</Link>
            <Link to="new">AddNewMessage</Link>
          </header>
          <Switch>
            <Redirect exact from="/" to="/all" />
            <Route path="/all" component={renderMessages} />
            <Route path="/new" component={AddForm} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
