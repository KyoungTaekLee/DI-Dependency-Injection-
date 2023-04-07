const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');

class Server {
  constructor(port) {
    this.port = port;
  }

  start() {
    http.createServer((req, res) => {
      const parseUrl = url.parse(req.url, true);
      const pathName = parseUrl.pathname;
      const Method = req.method;

      if (Method === 'GET' && pathName === '/') {
        this.GetRequest(req, res);
      }
    })
      .listen(this.port, () => {
        console.log(`Server running on port ${this.port}`);
      });
  }

  GetRequest(req, res) {

    function gettime(){

      const date = new Date();
      const hours = String(date.getHours()).padStart(2, '0');
    }
    gettime();
    const a = setInterval(gettime,1000);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
    <form action="/" method="GET">
    <h1>
    <h1>${a}</h1>
    </form>
    </body>
    </html>`);
    res.end();
  }
}
const server = new Server(3050);
server.start();