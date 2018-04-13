const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
  type Example {
    exampleName: String
    example: String
  }

  type Query {
    exampleQuery(exampleName: String!): Example
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
