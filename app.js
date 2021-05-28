const http = require('http');

// Objetos globales a hacer JSON
ruben = {
  nombre: "Ruben Dominguez Chavez",
  bio: "Hola! Soy Ruben, un programador en desarrollo. Mi objetivo principal es aprender todo lo posible."+
       " Soy estudiante de ingenieria en ciencias de la computacion. Estoy en mi tercer semestre."+
       " Me gusta desarrollar codigo para la web y espero ser un gran desarrollador algun dia.",
  educacion: {
    secundaria: "ESBIN 2012-2015",
    preparatoria: "PrepaTec 2015-2018",
    universidad: "UACH 2018-En curso"
  },
  listaHabilidades: ["Comunicativo", "Tolerante", "Flexible"]
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
}).listen(process.env.PORT);

console.log('Servidor corriendo en el puerto 8888');
