import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

const cache = cacheExchange({})

const client=  new Client({
  url: 'http://localhost:4000',
  exchanges: [dedupExchange, cache, fetchExchange]
});// end client

ReactDOM.render(
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
    document.getElementById("root")
)