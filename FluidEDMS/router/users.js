/*import { userInfo } from "os";
import { STATUS_CODES } from "http";
import { Session } from "inspector";
import { request } from "https";*/
var express = require('express');
var userops = express.Router();
var http = require('http'); 

userops.get('/',function(req,res){
    res.json({responsecode: 200, message: http.STATUS_CODES[200]});
});

userops.put('/signup');
userops.post('/login');
userops.post('/codeconfirm');
userops.put('/resetpass');
userops.get('/usermon');



module.exports = userops;
/*register userInfo,  
 - put new user info
 - confirm activation code
 - user reg Session*/
/*signin 
    - password verify,
    - create time based sessionStorage     */ 
/*monitor users
    - registering users,
    - user codes STATUS_CODES, 
    - active users
    - pass request
    - activate/disable user
    - delete/add user*/