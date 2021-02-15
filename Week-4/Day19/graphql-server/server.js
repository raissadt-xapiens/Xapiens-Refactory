const { ApolloServer, gql } = require('apollo-server');
const LRU = require('lru-cache');
const { generate } = require('shortid');


const typeDefs = gql`
type List {
  id: String!
  name: String!
  address: String!
  number: String!
  occupacy: String!
}

type Query {
  lists: [List]
  list(id: String!): List
}

type type Mutation {
  addList(name: String!, address: String!, number: String!, occupacy: String!): List
  updateList(id: String!, name: String!, address: String!, number: String!, occupacy: String!): List
}
`;


const cache = LRU({ max: 50, maxAge: 1000 * 60 * 60 });
const lists_data = require('./data.json');

const resolvers = {
  Query: {
    lists: () => {
    const list = lists_data;
    const lists = [];
    cache.forEach((name, address, number, occupacy, id) => lists.push({ name, address, number, occupacy, id })
    );
    const merged = [...list, ...lists];
    return merged;
  },
    list: (_, { id }) => {
      return {
        id,
        nam4: createRandomId.get(id),
        address: createRandomId.get(id),
        number: createRandomId.get(id),
        occupacy: createRandomId.get(id),
      };
    },
  },
  Mutation: {
    addList: (_, { name, address, number, occupacy }) => {
      const id = generate();
      const list = { name, address, number, occupacy, id };
      cache.set(id, name, address, number, occupacy);
      return list;
    },
    updateList: (_, { name, address, number, occupacy, id }) => {
      const list = { name, address, number, occupacy, id };
      cache.set(id, name, address, number, occupacy);
      return list;
    },
  }
}

const server = new ApolloServer({ typeDefs, resolvers });


// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});






// ------------------------------------------------------------------------


// const { ApolloServer, gql } = require("apollo-server");

// // A schema is a collection of type definitions (hence "typeDefs")
// // that together define the "shape" of queries that are executed against
// // your data.
// const typeDefs = gql`
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
//   # This "Book" type defines the queryable fields for every book in our data source.
//   type List {
//     id: Int
//     name: String
//     address: String
//     number: String
//     occupacy: String
//     years: Int
//   }

//   type Query {
//     lists: [List]
//   }

//   type Forms {
//     years: String
//   }

//   type Mutation {
//     updateForm(years: String): Forms
//   }
// `;

// const lists = require("./data.json");

// // Resolvers define the technique for fetching the types defined in the
// // schema. This resolver retrieves books from the "books" array above.
// const resolvers = {
//   Query: {
//     lists: () => lists,
//   },
//   Mutation: {
//     updateForm: () => years,
//   }
// };

// // The ApolloServer constructor requires two parameters: your schema
// // definition and your set of resolvers.
// const server = new ApolloServer({ typeDefs, resolvers });

// // The `listen` method launches a web server.
// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });

