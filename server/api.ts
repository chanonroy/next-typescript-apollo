const { ApolloServer, gql } = require('apollo-server');
const { find, filter } = require('lodash');

const books = [
  {
    id: '1',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    id: '2',
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const typeDefs = gql`
  type Book {
    id: String
    title: String
    author: String
  }
  type Query {
    books: [Book]
    getBookById(id: ID!): Book
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    getBookById: (parent, args) => {
      return find(books, { id: args.id })
    }
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
