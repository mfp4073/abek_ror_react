import React from 'react'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return(
    <div className="App">
      <header>
      </header>
      <Switch>
        <Route exact path="/" component={Airlines} />
        <Route exact path="/airlines/:slug" component={Airlines} />
      </Switch>
    </div>
  )
}

export default App


// LAST PLACE: PART 1 FINISHED