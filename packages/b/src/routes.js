import React from "react"
import Logo from './logo'
import { HashRouter, Route, Switch, Link } from "react-router-dom"

const Home = () => (
  <>
    <Link to="/"><Logo /></Link>
    <Link to="/sub-route"><span style={{color: '#62dafb'}}>Go to sub route</span></Link>
  </>
)

const SubRoute = () => (
  <>
    <Link to="/"><Logo /></Link>
    <h3 style={{color: '#62dafb'}}>Sub route</h3>
  </>
)

const Routes = ({ basename }) => (
  <HashRouter basename={basename}>
    <Switch>
      <Route path="/sub-route"  render={SubRoute} />
      <Route path="/" render={Home} />
    </Switch>
  </HashRouter>
)

export default Routes