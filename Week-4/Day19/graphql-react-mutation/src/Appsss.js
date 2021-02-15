import React from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery, useMutation, ApolloProvider, Query } from '@apollo/client';
import './App.css';


const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});


const GET_FORMS = gql`
{
  lists {
    id
    name
    address
    number
    occupacy
    years
  }
}`;

const UPDATE_FORM = gql`
  mutation UpdateForm($years: String) {
    updateForm(years: $years) {
      years
    }
  }
`;

function Forms() {
  const { loading, error, data } = useQuery(GET_FORMS);
  const [
    updateForm,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(UPDATE_FORM);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return data.lists.map(({years}) => {
    let input;

    return (
      <div key={years}>
        <p>{years}</p>
        <form 
          onSubmit={e => {
            e.preventDefault();
            updateForm({ variables: { years: input.value } });

            input.value = "";
          }}
        >
          <input
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">Update</button>
        </form>
        {mutationLoading && <p>Loading...</p>}
        {mutationError && <p>Something went wrong! Please try again!</p>}
      </div>
    );
  });
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="container">
          <h2>EMPLOYEE DATA</h2>
          <Query query={GET_FORMS}>
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
                        <th><abbr title="Years">YEARS OF EXXPERIENCE</abbr></th>
                        <th><abbr title="Update">UPDATE</abbr></th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.lists.map(({id, name, address, number, occupacy, years }) => (
                        <tr key={id}>
                          <td>{id}</td>
                          <td>{name}</td>
                          <td>{address}</td>
                          <td>{number}</td>
                          <td>{occupacy}</td>
                          <td>{years}</td>
                          <td>{Forms}</td>
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