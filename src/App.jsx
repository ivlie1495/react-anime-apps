import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import Layout from './components/layout'
import { client } from './utils/apolloClient'

import Pages from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Layout>
          <Pages />
        </Layout>
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default App
