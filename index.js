var express = require('express');
var app = express();

app.get('/api', function (req, res) {
  var firstName = process.env.FIRST_NAME || 'noname';
  var lastName = process.env.LAST_NAME || 'noname';
  var name = { firstName: firstName, lastName: lastName };
  res.json(name);
});

app.use("/", express.static(__dirname));

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});