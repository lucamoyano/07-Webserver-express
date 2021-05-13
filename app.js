require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');


// Servir contenido estatico
app.use( express.static('public') );


app.get('/', (req, res) => {
  //res.send('Hello World')
  res.render('home', { 
      nombre: 'Lucas',
      titulo: 'Curso de Node'
   });
});

app.get('/generic', (req, res) => {
    //res.send('Hello World')
    res.render('generic', { 
        nombre: 'Lucas',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    //res.send('Hello World')
    res.render('elements', { 
        nombre: 'Lucas',
        titulo: 'Curso de Node'
    });
});

/*app.get('/generic', (req, res) => {
    res.sendFile('/public/generic.html', {root: __dirname })
    //res.send('Hello World desde hola mundo')
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname+'/public/elements.html')
    //res.send('Hello World desde hola mundo')
});*/

app.get('*', (req, res) => { //Comodin
    //res.send('404 | Page not found')
    res.sendFile(__dirname+'/public/404.html');
});

 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});