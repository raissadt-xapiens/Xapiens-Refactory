// import React, { useState, useEffect } from "react";


// export default function App() {
//   const [username, setUsername] = useState("");
//   const [isRemember, setIsRemember] = useState(false);

//   useEffect(() => {
//     const rememberMe = localStorage.getItem("rememberMe") === "true";
//     const user = rememberMe ? localStorage.getItem("user") : "";
//     setIsRemember(rememberMe);
//     setUsername(user);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("submit...");
//     localStorage.setItem("username", isRemember ? username : "");
//     localStorage.setItem("isRemember", isRemember);
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         Username:{" "}
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <br />
//         Remember:{" "}
//         <input
//           type="checkbox"
//           checked={isRemember}
//           onChange={(e) => setIsRemember(e.target.checked)}
//         />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }


import React from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
      case 'LOGOUT':
        localStorage.clear();
        return {
          ...state,
          isAuthenticated: false,
          user: null
        };
        default:
          return state;
  };
};


function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || null)
    const token = JSON.parse(localStorage.getItem('token') || null)

    if(user && token) {
      dispatch({
        type: 'LOGIN',
        payload: {
          user,
          token
        }
      })
    }
  }, []);

  return (
    <AuthContext.Provider value={{state, dispatch}}>
      <div className="App">{!state.isAuthenticated ? <Login /> : <Home />}</div>
    </AuthContext.Provider>
  )
}

export default App;