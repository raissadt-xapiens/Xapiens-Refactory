import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Landing from '../src/components/LandingPage';
import Donation from '../src/components/DonationPage';
import Teams from '../src/components/TeamsPage';
import Projects from '../src/components/ProjectsPage';
import News from '../src/components/NewsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/donation">
            <Donation />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;