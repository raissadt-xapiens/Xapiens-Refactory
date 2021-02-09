import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Logout from './components/Logout';
import useToken from './components/useToken';


function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <div className="wrapper">
      <div className="container">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" style={{fontFamily: "monospace", fontSize: "15px", backgroundColor: "lightyellow", color: "black"}}>Home</a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false" style={{fontFamily: "monospace", fontSize: "15px", backgroundColor: "lightyellow", color: "black"}}>Profile</a>
            <a class="nav-item nav-link" id="nav-logout-tab" data-toggle="tab" href="#nav-logout" role="tab" aria-controls="nav-logout" aria-selected="false" style={{fontFamily: "monospace", fontSize: "15px", backgroundColor: "lightyellow", color: "black"}}>Logout</a>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><br/><h1 style={{fontSize: "60px", fontFamily: "monospace", backgroundColor: "lightgrey"}}>Home sweet home!</h1></div>
          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><br/><h2 style={{fontSize: "40px", fontFamily: "monospace", color: "darkgrey"}}>Hi!<br/><br/> My name is Raissa.<br/><br/>This is my 17th task on Xapiens-Refactory Training.</h2></div>
          <div class="tab-pane fade" id="nav-logout" role="tabpanel" aria-labelledby="nav-logout-tab"><br/><Logout /></div>
        </div>

        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;