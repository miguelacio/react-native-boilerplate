/**
 * App entrypoint
 */
import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import AppWithNavigationState from 'src/navigation'
import apolloClient from 'src/apollo'
import store from 'src/store'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Provider {...{ store }}>
          <AppWithNavigationState />
        </Provider>
      </ApolloProvider>
    )
  }
}

export default App
