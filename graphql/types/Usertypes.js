const {GraphQLObjectType,GraphQLString,GraphQLInt} = require("graphql");

const LoginType = new GraphQLObjectType({
name:'Logintype',
fields:{
    id:{type:GraphQLString},
    Username:{type:GraphQLString},
    Password:{type:GraphQLString},
    Email:{type:GraphQLString},
    Phone:{type:GraphQLString}
}

});


module.exports=LoginType;