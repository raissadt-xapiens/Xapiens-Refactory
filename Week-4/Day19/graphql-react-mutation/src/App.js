import React from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery, useMutation, ApolloProvider } from '@apollo/client';
import 'App.css';
import App from './Appsss';


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
    }
}`;

const UPDATE_FORM = gql`
mutation AddList (
    $name: String!
    $address: String!
    $number: String!
    $occupacy: String!
) {
    updateList (
        id: $id
        name: $name
        address: $address
        number: $number
        occupacy: $occupacy
    )
}`;

const ADD_FORM = gql`
mutation AddList (
    $name: String!
    $address: String!
    $number: String!
    $occupacy: String!
) {
    addList (
        id
        name
        address
        number
        occupacy
    )
}`;


function AddList() {
    let name, address, number, occupacy;
    const [addList] = useMutation(ADD_FORM, {
        update(cache, { data: { addList } }) {
            cache.modify({
                fields: {
                    lists(existingData = []) {
                        const newDataRef = cache.writeFragment({
                            data: addList,
                            fragment: gql`
                            fragment NewList on List {
                                id
                                name
                                address
                                number
                                occupacy
                            }
                            `,
                        });
                        return existingData.concat(newDataRef);
                    },
                },
            });
        },
    });

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addList({
                        variables: {
                            name: name.value,
                            address: address.value,
                            number: number.value,
                            occupacy: occupacy.value
                        },
                    });
                    console.log(name.value);
                    name.value = "";
                    address.value = "";
                    number.value = "",
                    occupacy.value = ""
                }}
            >
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input ref={(node) => {
                                    name = node;
                                }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>
                                <input ref={(node) => {
                                    address = node;
                                }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Number</td>
                            <td>
                                <input ref={(node) => {
                                    number = node;
                                }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Occupacy</td>
                            <td>
                                <input ref={(node) => {
                                    occupacy = node;
                                }}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );

    
    function Forms() {
        const { loading, error, data } = useQuery(GET_FORMS);
        const [{ loading: mutationLoading, error: mutationError }] = useMutation(UPDATE_FORM);
        
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :</p>;

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
                      {mutationLoading && <p>Loading...</p>}
                      {mutationError && <p>Error! Something was wrong.</p>}
                    </tbody>
                    <tfooter>
                      <tr>
                        <hr/>
                      </tr>
                    </tfooter>
                  </table>
            </div>
        );
    }


    function App() {
        return (
            <ApolloProvider client={client}>
                <div className="App">
                    <div className="container">
                        <h2>EMPLOYEE DATA</h2>
                        <AddList />
                        <Forms />
                    </div>
                </div>
            </ApolloProvider>
        );
    }
}


export default App;



// -------------------------------------------------------------------------------------------------------------------------



// import React from 'react';
// import { ApolloClient, InMemoryCache, gql, useQuery, useMutation, ApolloProvider, Query } from '@apollo/client';
// import './App.css';


// const client = new ApolloClient({
//     uri: 'http://localhost:4000/',
//     cache: new InMemoryCache()
// });

// const GET_FORMS = gql`
// {
//     lists {
//         id
//         name
//         address
//         number
//         occupacy
//         years
//     }
// }`;

// const UPDATE_FORM = gql`
//     mutation UpdateList($id: Int, $name: String, $address: String, $number: String, $occupacy: String) {
//         updateList(id: $id, name: $name, address: $address, number: $number, occupacy: $occupacy, year: $year) {
//             id
//             name
//             address
//             number
//             occupacy
//             years
//         }
//     }
// `;

// function Forms() {
//     const { loading, error, data } = useQuery(GET_FORMS);
//     const [
//         updateList,
//         { loading: mutationLoading, error: mutationError }
//     ] = useMutation(UPDATE_FORM);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Failed!</p>

//     return data.lists.map(({ id, name, address, number, occupacy, years }) => {
//         let input;

//         return (
//             <div key={id}>
//                 <p>{id}</p>
//                 <p>{name}</p>
//                 <p>{address}</p>
//                 <p>{number}</p>
//                 <p>{occupacy}</p>
//                 <p>{years}</p>
//                 <form onSubmit={ e => {
//                     e.preventDefault();
//                     updateList({ cariables: { id, name, address, number, occupacy, years: input.value } });

//                     input.value = "";
//                 }}
//                 >
//                     <input ref={node => {
//                         input = node;
//                     }}
//                     />
//                     <button type="submit">Update</button>
//                 </form>
//                 {mutationLoading && <p>Loading...</p>}
//                 {mutationError && <p>Error!</p>}
//             </div>
//         );
//     });
// }



// function App() {
//     return (
//         <ApolloProvider client={client}>
//             <div className="App">
//                 <div className="container">
//                     <h2>EMPLOYEE DATA</h2>
                    
//                 </div>
//             </div>
//         </ApolloProvider>
//     )
// }


// export default App;