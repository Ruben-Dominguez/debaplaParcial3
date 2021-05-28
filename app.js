const fs = require('fs');
const http = require('http');

// server creado en el puerto 8888
http.createServer((request, response) =>{
  // interpolacion de la ruta dada. default -> index.html
  const file = request.url == "/" ? "./index.html" : `./${request.url}`;
  fs.readFile(file, (error, data)=>{
    if(error) {
      response.writeHead(404, {"Content-Type":"text/plain"});
      response.write("Not found :(");
      response.end();
    }
    else {
      const extension = file.split('.').pop();
      switch (extension) {
        case 'txt':
          response.writeHead(200, {"Content-Type":"text/plain"});
          break;
        case 'html':
          response.writeHead(200, {"Content-Type":"text/html"});
          break;
        case 'jpeg':
          response.writeHead(200, {"Content-Type":"image/jpeg"});
          break;
        case 'css':
          response.writeHead(200, {"Content-Type":"text/css"});
          break;
        case 'js':
          response.writeHead(200, {"Content-Type":"text/javascript"});
          break;
        default:
          response.writeHead(200, {"Content-Type":"text/plain"});
      }
      response.write(data);
      response.end();
    }
  });

}).listen(8888);
