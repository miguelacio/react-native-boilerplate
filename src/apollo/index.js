import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { getMainDefinition } from 'apollo-utilities'
import { split, ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  }
})

const httpLink = createHttpLink({ uri: 'URL' })

const normalLink = ApolloLink.from([authLink, httpLink])

const link = split(({ query }) => {
  const { kind, operation } = getMainDefinition(query)
  return kind === 'OperationDefinition' && operation === 'subscription'
}, normalLink)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    dataIdFromObject: o => (o._id ? `${o.__typename}:${o._id}` : null),
    fragmentMatcher: {
      match: ({ id }, _typeCond, context) => !!context.store.get(id),
    },
  }),
})

export default client
