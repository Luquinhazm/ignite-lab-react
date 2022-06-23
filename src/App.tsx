import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import HomePage from "./pages/HomePage"
import { Router } from "./Router"

function App() {

  return (
    <>
    <ApolloProvider client={client} >
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ApolloProvider>
    </>
  )
}

export default App
