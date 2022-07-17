const http=require('http');
const fs=require('fs');
const file=process.argv[3];
const port=process.argv[2];
const server = http.createServer(function (req, res) {
    res.writeHead(200,{'content-type':'text/plain'})
   const stream =fs.createReadStream(file);   
    stream.pipe(res);
});
  server.listen(port);