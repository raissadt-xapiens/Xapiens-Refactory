import React from 'react';
import ReactDOM from 'react-dom';
// import SignIn from './SignIn';
// import SignUp from './SignUp';
import Formies from './HookForm';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <SignIn /> */}
    {/* <SignUp /> */}
    <Formies />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);