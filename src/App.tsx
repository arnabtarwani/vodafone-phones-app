import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import PhoneDetails from './components/PhoneDetails/PhoneDetails'
import PhoneGallery from './components/PhoneGallery/PhoneGallery'

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/gallery" component={PhoneGallery} />
    <Route exact={true} path="/:id" component={PhoneDetails} />
  </Switch>
)

export default App
