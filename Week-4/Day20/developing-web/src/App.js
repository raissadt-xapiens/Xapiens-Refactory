import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import FHSignIn from '../src/FormSignIn';
import FHSignUp from '../src/FormSignUp';
import useToken from '../src/components/Form/useToken';
import Landing from '../src/components/LandingPage';
import Donation from '../src/components/DonationPage';
import Teams from '../src/components/TeamsPage';
import Projects from '../src/components/ProjectsPage';
import News from '../src/components/NewsPage';
import './App.css';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <FHSignIn setToken={setToken} />
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup">
            <FHSignUp />
          </Route>
          <Route path="/landing">
            <Landing />
          </Route>
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
          <Route exact path="/">
            <FHSignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;