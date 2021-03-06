var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var articalDao = require('./dao/artical');
var keywordDao = require('./dao/keywordDao');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/article',function(req, res, next){
   articalDao.query(req, res, next);
});

app.get('/keyword',function(req, res, next){
    keywordDao.query(req, res, next);
});

app.post('/keyword/one',function(req, res, next){
   keywordDao.get_one(req, res,  next);
});
