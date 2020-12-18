import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Airline from './Airline/Airline'
import Airlines from './Airlines/Airlines'

const App = () => {
  return(
    <div className="App">
      < Switch >
        <Route exact path="/" component={Airlines} />
        <Route exact path="/airline/:slug" component={Airline} />
      </Switch >
    </div>
  )
}

export default App


// LAST PLACE: PART 1 FINISHED
