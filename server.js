/**
 * Created by tajinderpalsohi on 6/25/16.
 */
'use strict';

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    config = require('./config');

//app.use(require('prerender-node').set('prerenderToken', '6fc6F8ADXswzblZdiaVp'));
app.use(express.static('./app'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));



var api = require('./backend/routes/api')(app, express);

app.use('/api/v1', api);

// This route enables HTML5Mode by forwarding missing files to the index.html
app.all('*', function(req, res) {
    res.sendFile(__dirname + '/app/index.html');
});


app.listen(config.port, function (err) {
    if(err){
        console.log(err);
    }else{
        console.log('Listening on port '+ config.port);
    }
});