//momentjs date time library 
//npm i moment
const net= require('net');
const moment= require('moment');
const port=process.argv[2];
const server = net.createServer (socket=> {
    const time=moment().format('YYYY-MM-DD hh:mm');
    socket.write(time);
    socket.end('\n');
});
 server.listen(port);






//meth2
/*
function zeroFill(i) {
  return (i<10?'0':'')+i
}
function now() {
  var d=new Date()
  return d.getFullYear()+'-'+
  zeroFill(d.getMonth(0)+1)+'-'+
  zeroFill(d.getDate())+' '+
  zeroFill(d.getHours())+':'+
  zeroFill(d.getMinutes())
}

const server = net.createServer (socket=> {
   socket.end(now()+'\n')
});
  server.listen(port);*/