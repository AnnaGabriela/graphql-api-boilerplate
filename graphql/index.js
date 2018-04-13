const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
  type Example {
    id: ID
    example: String
  }

  type Query {
    exampleQuery(example: String!): Example
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
