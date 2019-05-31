var LoginType = require("../types/Usertypes");
const {GraphQLObjectType,GraphQLString,GraphQLInt} = require("graphql");;
var usermodel = require('./../../model/user');
var md5 = require("md5");


const RootQuery = new GraphQLObjectType({
   name:'RootQueryType',
   fields:{
       user:{
        type:LoginType,
        args:{
            email:{type:GraphQLString},
            password:{type:GraphQLString},
            
        },
       async resolve(parentValue,args){
        try {
        var user = await usermodel.findOne({Email:args.email});
            if(!user) throw Error(`Account not found ${args.email}`);
            
            if(user.verify==0){
                if(user.Password == md5(args.password)){
                    return (user)
                }else{
                    return Error("password Not Match");
                }    
            }else{
                return Error("Account Not Verify");
            }
        } catch (error) {
            throw Error(error);
        }
    }
}
}
});


module.exports=RootQuery;