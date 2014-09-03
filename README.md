gridfs issue test
-----------------

    > npm install mongodb gridfs-stream restify
    > dd if=/dev/zero of=blob bs=1M count=10
    > mongofiles -d test put blob
    > node app.js
    > ab -n 100 http://localhost:8000/

`ab` will report failed requests because the response content differs across
the 100 requests while it shouldn't.
