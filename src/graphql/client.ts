import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'cross-fetch'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ fetch, uri: 'http://localhost:4001/graphql' }),
})

export { client }
