gridfs issue test
-----------------

    > npm install mongodb gridfs-locking-stream restify
    > dd if=/dev/zero of=./testfile bs=1M count=10
    > mongofiles -d mydb put ./testfile
    > node app.js <object id from mongofiles>
    > ab -n 100 http://localhost:8000/

Exceptions look like:

    Error: Lock.releaseLock Lock document not found in collection.
        at emitError (/home/daniel/private/development/nodejs/gridfs/node_modules/gridfs-locking-stream/node_modules/gridfs-locks/index.js:410:37)
        at /home/daniel/private/development/nodejs/gridfs/node_modules/gridfs-locking-stream/node_modules/gridfs-locks/index.js:245:16
        at /home/daniel/private/development/nodejs/gridfs/node_modules/mongodb/lib/mongodb/collection/core.js:773:14
        at /home/daniel/private/development/nodejs/gridfs/node_modules/mongodb/lib/mongodb/db.js:1131:7
        at b (domain.js:183:18)
        at /home/daniel/private/development/nodejs/gridfs/node_modules/mongodb/lib/mongodb/db.js:1847:9
        at b (domain.js:183:18)
        at Server.Base._callHandler (/home/daniel/private/development/nodejs/gridfs/node_modules/mongodb/lib/mongodb/connection/base.js:445:41)
        at /home/daniel/private/development/nodejs/gridfs/node_modules/mongodb/lib/mongodb/connection/server.js:478:18
        at MongoReply.parseBody (/home/daniel/private/development/nodejs/gridfs/node_modules/mongodb/lib/mongodb/responses/mongo_reply.js:68:5)
