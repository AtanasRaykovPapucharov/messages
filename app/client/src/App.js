import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Link, Switch } from 'react-router-dom'
import Message from './components/Message/Message'
import AddForm from './components/AddForm/AddForm'
import {API_URL} from './services/Constants'
import './App.css'

class App extends Component {
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
    return fetch(API_URL)
            .then(data => {
              return data.json()
            })
            .catch(err => {
              throw new Error()
            })
  }

  render() {
    const renderMessages = () => {
      return this.state.messages.map(msg => <Message key={msg._id} id={msg._id} name={msg.author} message={msg.content} />)
    }

    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to="all" className="App-link">All Messages</Link>
            <Link to="new" className="App-link">New Message</Link>
          </header>
          <main className="App-main">
            <Switch>
              <Redirect exact from="/" to="/all" />
              <Route path="/all" component={renderMessages} />
              <Route path="/new" component={AddForm} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
