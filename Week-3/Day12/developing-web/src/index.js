import React from 'react';
import ReactDOM from 'react-dom';
// import SignIn from './SignIn';
// import SignUp from './SignUp';
// import App from './App';
import Form from '../src/components/Form/Hooks';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <SignIn /> */}
    {/* <SignUp /> */}
    {/* <App /> */}
    <Form />
  </React.StrictMode>,
  document.getElementById('root')
);