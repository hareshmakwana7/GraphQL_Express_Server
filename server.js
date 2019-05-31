var express = require("express");
var expresGraphQL = require("express-graphql")
var app =express();
 var schema = require('./graphql/index')
app.use('/graphql', expresGraphQL({
    schema,
    graphiql:true
}));


app.listen(8001);
console.log("server is on 8001 !!!");