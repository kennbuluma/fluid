var express = require('express');

var userops = require('./router/users');
var fileops = require('./router/files');
var edms= require('./router/edms');
var gqlops= require('./router/graphql');

var app= express();

app.use('/ext', gqlops);
app.use('/usr', userops);
app.use('/fs', fileops);
app.use('/app', edms);

app.listen(3100);
console.log(`Running a GraphQL API Server at localhost:3100/ext`);