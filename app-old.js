
const http = require('http');

http.createServer( (req, res) => {
   
    //res.writeHead(200, {'Content-Type': 'application/json'});
    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    //res.writeHead(200, {'Content-Type': 'application/csv'});

    // res.write('id, nombre\n');
    // res.write('1, Thomas\n');
    // res.write('2, Arthur\n');
    // res.write('3, Jhon\n');
    // res.write('3, Finn\n');

    // const persona = {
    //     id: 1,
    //     nombre: 'Lucas'
    // }


    res.write('Hola mundo');
    res.end();
})
.listen( 8080 );

console.log('Escuchando el puerto', 8080);