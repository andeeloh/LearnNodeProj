var express = require('express');
var app = express();

var port = process.env.PORT;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));

// start listening for GET commands at /
app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/routing', function(req, res) {
    res.send('Routing!');
});


app.listen(port,function(err)
{
   console.log('The server is running on port: '+ port); 
});