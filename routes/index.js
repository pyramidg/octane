exports.index = function(req, res) {
  res.render('default', {
    title: ' Home',
    classname: 'home',
    users: ['Pyramid', 'Sherretta', 'Nala']
  });
  // between {title: 'Home'} is where Modules (source code, Objects or Json) are merged with Views (templates rendering data);
}
exports.about =  function(req, res) {
  res.render('default', {
    title: ' About Us',
    classname: 'about'
  });
}
