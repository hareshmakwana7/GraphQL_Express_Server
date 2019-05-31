const {GraphQLObjectType,GraphQLString,GraphQLInt,gRAPH} = require("graphql");;
var LoginType = require('../types/Usertypes');
var User_model = require('../../model/user');
var md5 = require("md5");

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
            async resolve(root, args) {
                try {
                    var isuser = await User_model.findOne({ Email: args.Email });
                    if (isuser) {
                        if (isuser.verify == 0) {
                            throw Error("Already have account please verify");
                        } else {
                            throw Error("Already have account please Login");
                        }
                    } else {
                        var newTodo = new User_model({
                            Username: args.Username,
                            Email: args.Email,
                            Password: md5(args.Password),
                            Phone: args.Phone,
                        })
                        return new Promise((resolve, reject) => {
                            newTodo.save(function (err) {
                                if (err) reject(err)
                                else resolve(newTodo)
                            })
                        })
                    }
                } catch (error) {
                    throw Error(error);
                }
            }
        }
    }
})



module.exports=Register;
