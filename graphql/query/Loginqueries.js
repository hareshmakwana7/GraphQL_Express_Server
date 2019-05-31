var LoginType = require("../types/Usertypes");
const {GraphQLObjectType,GraphQLString,GraphQLInt} = require("graphql");;
var usermodel = require('./../../model/user');



const RootQuery = new GraphQLObjectType({
   name:'RootQueryType',
   fields:{
       user:{
        type:LoginType,
        args:{
            id:{type:GraphQLString}
        },
       async resolve(parentValue,args){
        console.log(args)
        }
       }
   } 
});


module.exports=RootQuery;