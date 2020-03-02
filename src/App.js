import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { services } from './data';

import { Topbar, Menubar, Footer } from './components';
import { 
  Home, 
  About, 
  Search, 
  Services, 
  Projects, 
  Clients, 
  Contact 
} from './pages';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="content">
        <Topbar/>
        <Menubar/>

          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/search">
              <Search/>
            </Route>
            <Route path="/services">
              <Services data={services}/>
            </Route>
            <Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/clients">
              <Clients/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
