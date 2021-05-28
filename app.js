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

juan = {
  nombre: "Juan Pablo Martinez Cantu",
  bio: "Soy JP, un estudiante de la UACH en la carrera ciencias de la computación"
        + " en la facultad de ingeniería. Soy bilingue y me gusta el anime." + 
        " Puedo programar en varios lenguajes y paradigmas de programación. " + 
        "Tengo interés en el desarrollo de aplicaciones y servicios web.",
  educacion: {
    secundaria: "Camino Real Middle School 2011-2014",
    preparatoria: "Onate High School 2014-2017",
    universidad: "UACH 2018-En curso"
  },
  listaHabilidades: ["Dedicado", "Puntual", "Flexible"]
}

// s u s cvs

const server = http.createServer((req, res) => {


    if (req.url == '/329806') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(ruben));
        res.end();
    }else if (req.url == '/329688') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(juan));
        res.end();
    } else {
        res.end('Invalid request');
    }
}).listen(process.env.PORT);
