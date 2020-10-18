const { ApolloServer } = require('appolo-server');
const gql = require('graphql-tag');

const typeDefs = gql`
    type Query{
        sayHi: String!
    }

const resolvers = {
    
}