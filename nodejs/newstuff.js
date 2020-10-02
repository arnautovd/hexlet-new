
let http = require('http');
let fs = require('fs');

let file = fs.readFile('object.json', (err, data) => {
    if (err) throw err;
    let dfile = data.toString();

    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`${JSON.parse(dfile).name} is here \n`);
    
    }).listen(8124, '127.0.0.1');
    
    console.log('Server running ...');
    // console.log(JSON.parse(dfile).name);
  });


