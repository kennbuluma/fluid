var http = require('http');
var express = require('express');
var fileops = express.Router();

fileops.get('/',function(req,res){
    res.json({responsecode: 200, message: http.STATUS_CODES[200]});
});

fileops.put('/createfolder',function(req,res){});
fileops.post('/copyfolder',function(req,res){});
fileops.post('/movefolder',function(req,res){});
fileops.delete('/deletefolder',function(req,res){});
fileops.put('/createfile',function(req,res){});
fileops.post('/copyfile',function(req,res){});
fileops.post('/movefile',function(req,res){});
fileops.delete('/deletefile',function(req,res){});
fileops.post('/compress',function(req,res){});
fileops.put('/upload',function(req,res){});
fileops.post('/download',function(req,res){});
fileops.post('/view',function(req,res){});
fileops.post('/stream',function(req,res){});

module.exports = fileops;