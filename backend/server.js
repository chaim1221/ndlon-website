const app = require('./app.js');
const port = process.argv[2] == "--production" ? 80 : 8080;

app.listen(port, function() {
  console.log('Server running on port ' + port + '.');
});
