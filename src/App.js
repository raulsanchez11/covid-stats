import { Router } from '@reach/router'

import { Subscribe, CovidMap } from 'pages/'

function App() {
  return (
    <Router>
      <CovidMap path="/covid" default />
      <Subscribe path="/subscribe" />
    </Router>
  )
}

export default App
