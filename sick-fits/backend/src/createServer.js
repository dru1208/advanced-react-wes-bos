const { GraphQLServer } = require('graphql-yoga');
// need to import resolvers (where does data come from/what does the data do in database)
// query resolvers and mutation resolvers

const Mutation = require('./resolvers/Mutation.js')
const Query = require('./resolvers/Query.js')
const db = require('./DB.js')

// Creating server

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({ ...req, db }),
  })
}

module.exports = createServer;