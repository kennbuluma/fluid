var http = require('http');
var express = require('express');
var edms = express.Router();
var fx = require('../engine/fxengine');

edms.get('/',function(req,res){
    res.json({responsecode: 200, message: http.STATUS_CODES[200]});
});

edms.post('/folderlist', function(req,res){
    let branchid = req.body.branchid;
    let deptid = req.body.deptid;
    fx.EDMSOps.folderlist().then().catch();
});

edms.post('/filelist',function(req,res){
    fx.EDMSOps.filelist().then().catch();
});

edms.post('/filerequest',function(req,res){
    fx.EDMSOps.filereqer().then().catch();
});

edms.post('/fileassign',function(req,res){
    fx.EDMSOps.fileasser().then().catch();
});

edms.post('/filereturn',function(req,res){
    fx.EDMSOps.fileret().then().catch();
});

edms.post('/comment',function(req,res){
    fx.EDMSOps.comment().then().catch();
});

edms.post('/stamp',function(req,res){
    fx.EDMSOps.stamp().then().catch();
});

edms.post('/search', function(req,res){
    fx.EDMSOps.search().then().catch();
});

module.exports = edms;