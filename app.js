const http = require('http');
const server = http.createServer((request, response) => {

    if(request.url === '/')
    {
      response.write('Welcome to home page');
      response.end();
    }

    if(request.url === '/about')
    {
      response.write('Welcome to about page');
      response.end();
    }

});

server.listen(5000);
