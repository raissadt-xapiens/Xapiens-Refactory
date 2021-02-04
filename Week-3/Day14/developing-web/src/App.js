import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';
import Landing from '../src/components/LandingPage';
import News from '../src/components/NewsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">


        <Switch>
          <Route path="/news">
            <News />
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