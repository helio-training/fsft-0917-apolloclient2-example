import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Configuration from './configuration'

const Wrapped = (
  <ApolloProvider client={Configuration}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(Wrapped, document.getElementById('root'))
registerServiceWorker()
