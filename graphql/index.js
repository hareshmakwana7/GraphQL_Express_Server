var RootQuery = require("../graphql/query/Loginqueries");
const { GraphQLSchema}= require('graphql');
var Register = require('./mutation/usermulation');

module.exports= new GraphQLSchema({
    query:RootQuery,
    mutation:Register
})