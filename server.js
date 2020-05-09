const app = require('./src');
const config = require('./config');

// start the server
app.listen(config.port, () => {
  console.log('listening on port', config.port);
});
