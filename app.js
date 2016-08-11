var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('default', {title: 'Home'});
  // between {title: 'Home'} is where Modules (source code, Objects or Json) are merged with Views (templates rendering data);
});

app.get('/about', function(req, res) {
  res.send('<h1>About</h1> me');
});

app.get('/about/:name?', function(req, res) {
  var name = req.params.name;
  res.send('<p>My name is '+name+" until otherwise</p>");
});


var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});
