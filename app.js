const http = require('http');

// Objetos globales a hacer JSON
ruben = {
  nombre: "Ruben Dominguez Chavez",
  bio: "Hola! Soy Ruben, un programador en desarrollo. Mi objetivo principal es aprender todo lo posible :).",
  educacion: "TODO",
  listaHailidades: ["TODO1", "TODO2", "TODO3"]
}

// s u s cvs

const server = http.createServer((req, res) => {


    if (req.url == '/329806') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(ruben));
        res.end();
    } else {
        res.end('Invalid request');
    }
}).listen(8888);

console.log('Servidor corriendo en el puerto 8888');
