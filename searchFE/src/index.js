import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

import { ApolloProvider} from "react-apollo"
import {ApolloClient} from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache} from "apollo-cache-inmemory"


//create httplink to ApolloClient with the GraphQL API
const httpLink = createHttpLink({
    url:"https://4000-eae63fca-71df-4457-93bf-eb2cfcb2c0d5.ws-us02.gitpod.io/"
})


//Instantiate ApolloClient by  passing the httplink and inmemory
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
    document.getElementById("root")
)