var mongo = require('mongodb');
var Grid = require('gridfs-locking-stream');
var restify = require("restify");

var server = restify.createServer();

var gfs;

server.on('uncaughtException', function(req, res, route, err) {
  console.log(err.stack);
})

server.get('/', function(req, res, next) {
  gfs.createReadStream({
    _id: process.argv[2]
  }, function(err, readStream) {
    readStream.pipe(res);
  });
});

server.listen(8000, function() {
    var db = new mongo.Db('mydb', new mongo.Server("127.0.0.1", 27017), {w: -1});
    db.open(function() {
      gfs = Grid(db, mongo);
      console.log("Listening...");
    });
});
