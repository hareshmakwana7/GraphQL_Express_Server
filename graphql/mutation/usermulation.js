const {GraphQLObjectType,GraphQLString,GraphQLInt,gRAPH} = require("graphql");;
var LoginType = require('../types/Usertypes');
var User_model = require('../../model/user');


const Register = new GraphQLObjectType({
    name: "registermutation",
    fields: {
        addUser: {
            type: LoginType,
            args: {
                Username: { type: GraphQLString },
                Email: { type: GraphQLString },
                Password: { type: GraphQLString },
                Phone: { type: GraphQLString }
            },
            resolve: (root, args) => {
                var newTodo = new User_model({
                  Username: args.Username,
                Email:args.Email,
                Password:args.Password,
                Phone: args.Phone,
                })
                newTodo.id = newTodo._id
                return new Promise((resolve, reject) => {
                  newTodo.save(function (err) {
                    console.log(err)
                    
                    if (err) reject(err)
                    else resolve(newTodo)
                  })
                })

        // try {
        //     return await User_model.create(params);
        //     // var user_model = new User_model(params);
        //     // var add = await user_model.save();
        //     // console.log(add);
        //     // return add
        // } catch (error) {
        //     console.log(error);
        // }
        
    }
}
}
})

module.exports=Register;
