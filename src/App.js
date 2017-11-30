import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import logo from './logo.svg'
import './App.css'

class App extends Component{


  renderHello = () => {
    const { data: { loading, hello = {}  }} = this.props
    return !loading && (
      <div>{hello.message}</div>
    )
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.renderHello()} to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

const QUERY = gql`
    query {
        hello {
            message
        }
    }
`

export default graphql(QUERY)(App)
