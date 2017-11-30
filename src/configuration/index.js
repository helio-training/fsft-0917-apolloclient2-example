import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const uri = `https://api.graph.cool/simple/v1/cjamztbog3wur019646qugphr`

const client = new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache()
})

export default client