const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  })
    .end((new Date()).toString(), () => {
      console.log('Response sent.')
    });
});

server.listen(3000);
