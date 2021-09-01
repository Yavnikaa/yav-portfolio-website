import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Header, Footer, Home, About, UXDesign, WebDevelopment, WebsiteDesign} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <Switch>
          <Route path="/yav-portfolio-website" exact component={() => <Home/>} />
          <Route path="/uxdesign" exact component={() => <UXDesign/>} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/webd" exact component={() => <WebDevelopment />} />
          <Route path="/websites" exact component={() => <WebsiteDesign />} />
          </Switch>
          <Footer/>
        </Router>
      </div>
    )
  }
}

export default App