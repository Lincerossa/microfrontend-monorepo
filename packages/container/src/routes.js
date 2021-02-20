import React from "react"
import { HashRouter, Route, Switch, Link } from "react-router-dom"
import { Button, Space } from 'antd'
import A from '@microfrontend-monorepo/a/dist/App'
import B from '@microfrontend-monorepo/b/dist/App'
import logo from './logo.svg';


const Home = (e) => (
  <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>{e.location.pathname}</h1>
    <Space size="large">
      <Link to="/first-route"><Button type="primary" size="large">First route</Button></Link>
      <Link to="/second-route"><Button type="primary" size="large">Second route</Button></Link>
    </Space>
  </header>
</div>
)


const FirstRoute = (e) =>  (
  <div className="App">
  <header className="App-header">
    <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
    <h1>{e.location.pathname}</h1>
    <p>Here, we have also the App A with its own routing system</p>
    <div className="App-wrapper">
      <A basename={e.location.pathname} />
    </div>
    </header>
  </div>
)

const SecondRoute = (e) => (
  <div className="App">
  <header className="App-header">
    <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
    <h1>{e.location.pathname}</h1>
    <p>Here, we have also the App B with its own routing system</p>
    <div className="App-wrapper">
      <B basename={e.location.pathname} />
    </div>  
    </header>
  </div>
)


const Routes = ({ basename }) => (
  <HashRouter basename={basename}>
    <Switch>
      <Route path="/first-route"  render={FirstRoute} />
      <Route path="/second-route"  render={SecondRoute} />
      <Route path="/" render={Home} />
    </Switch>
  </HashRouter>
)

export default Routes