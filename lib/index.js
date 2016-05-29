var restify = require('restify');

function getRoute(req, res, next) {
  res.send(req.params.name);
  return next();
}

function updateRoute(req, res, next) {
  return next();
}

var server = restify.createServer();
server.pre(restify.pre.userAgentConnection());

// Create
server.post('/route', function create(req, res, next) {
  res.send(201, Math.random().toString(36).substr(3, 8));
  return next();
});

// Read
server.get('/route/:id', getRoute);

// Update
server.put('/route', updateRoute);

server.head('/route/:id', getRoute);

// Delete
// server.del('route/:id', function rm (req, res, next) {
//   res.send(204);
//   return next();
// });

server.listen(8080, function() {
  console.info('%s listening at %s', server.name, server.url);
});
