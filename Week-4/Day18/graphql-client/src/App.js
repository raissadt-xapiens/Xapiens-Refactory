import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import './App.css';


const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const queries = gql`
{
  lists {
    id
    name
    address
    number
    occupacy
  }
}`;



function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="container">
          <h2>EMPLOYEE DATA</h2>
          <Query query={queries}>
            {({ data, loading, error }) => {
              if (loading) 
                return <h5>--Loading...--</h5>
              if (error) 
                return <h5>--Error! Something went wrong!--</h5>


              return (
                <div>
                  <table className="table is-hoverable">
                    <thead>
                      <tr>
                        <th><abbr title="ID">ID</abbr></th>
                        <th><abbr title="Name">FULL NAME</abbr></th>
                        <th><abbr title="Address">ADDRESS</abbr></th>
                        <th><abbr title="Number">PHONE NUMBER</abbr></th>
                        <th><abbr title="Occupacy">OCCUPACY</abbr></th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.lists.map(({id, name, address, number, occupacy }) => (
                        <tr key={id}>
                          <td>{id}</td>
                          <td>{name}</td>
                          <td>{address}</td>
                          <td>{number}</td>
                          <td>{occupacy}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfooter>
                      <tr>
                        <hr/>
                      </tr>
                    </tfooter>
                  </table>
                </div>
              )
            }}
          </Query>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
