//npm install through2-map
const http = require('http');
const map = require('through2-map')
const port =process.argv[2];
const server = http.createServer((req, res) =>{

  if(req.method !=='POST' ) return res.end('this server only accepts post');
  req.pipe(map(data => {
    return data.toString().toUpperCase();
  })).pipe(res);
});
server.listen(port);
