import { Router } from '@reach/router'

import { Login, Home } from 'pages/'

function App() {
  return (
    <Router>
      <Home path="/" />
      <Login path="/login" />
    </Router>
  )
}

export default App
