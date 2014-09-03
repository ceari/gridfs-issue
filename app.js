var mongodb = require('mongodb');
var restify = require('restify');
var Grid = require('gridfs-stream');

var server = restify.createServer();

var db = new mongodb.Db('test', new mongodb.Server('localhost', 27017), {w: 0});

// Establish connection to db
db.open(function(err, db) {
  if (err) console.log(err);
  var gfs = Grid(db, mongodb);

  server.get('/', function(req, res, next) {
    var readStream = gfs.createReadStream({filename: 'blob'});
    readStream.pipe(res);
  });

  server.listen(8000, function() {
    console.log('Listening ...');
  });
});
