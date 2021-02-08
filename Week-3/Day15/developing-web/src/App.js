import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import FHSignIn from '../src/FormSignIn';
import FHSignUp from '../src/FormSignUp';
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
          {/* <Route path="/signup">
            <FHSignUp />
          </Route>
          <Route path="/signin">
            <FHSignIn />
          </Route> */}
          {/* <Route path="/landing">
            <Landing />
          </Route> */}
          {/* <Route path="/teams">
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
          </Route> */}
          <Route exact path="/" component={FHSignIn} />
          <Route exact path="/signup" component={FHSignUp} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/news" component={News} />
          <Route exact path="/donation" component={Donation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;