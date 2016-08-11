var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('default', {
    title: 'Home',
    classname: 'home',
    users: ['Pyramid', 'Sherretta', 'Nala']
  });
  // between {title: 'Home'} is where Modules (source code, Objects or Json) are merged with Views (templates rendering data);
});
app.get('/about', function(req, res) {
  res.render('default', {
    title: 'About Us',
    classname: 'about'
  });
});

app.get('*', function(req, res) {
  res.send('Bad Route');
});

var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});
