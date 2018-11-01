import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Redirect, Route, Link } from 'react-router-dom'
import { API_URL } from './services/constants'
import Requester from './services/requester'
import AddForm from './components/AddForm/AddForm'
import './App.css'

const Message = lazy(() => import('./components/Message/Message'))

class App extends Component {
  state = {
    messages: []
  }

  componentDidMount() {
    Requester().getAll(API_URL)
      .then(data => {
        return data.json()
      })
      .then(messages => {
        let newState = this.state

        newState.messages = messages
        this.setState(newState)
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  render() {
    const renderMessages = () => {
      return this.state.messages.map(msg => <Suspense key={msg._id} fallback={<div>Loading...</div>}><Message id={msg._id} name={msg.author} message={msg.content} /></Suspense>)
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
