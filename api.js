let http = require('http');

let numero   = [ {um: 1}, {dois: 2}, {tres: 3} ]
let astrono  = [ {sol: 'Estrela'}, {planeta: 'Terra'}, {naveEstelar: 'USS Enterprise'} ]
let array    = ["ABC", 24, 18000]
let porsches = [ {'911': 'Carrera'}, {'Boxster': 'S'}, {'Cayenne': 'GTS'} ]
let carros   = [ {'Ford': 'Mustang'}, {'Chevrolet': 'Corvette'}, {'Opel': 'Corsa'} ]
let movies   = [ {'Warner': 'Barbie'}, {'Paramount': 'Top Gum'}, {'Disney': 'Mickey'} ]
let music    = ['Superstition', 'Around The World', 'We cont need another hero', {'Daft Punk': 'Around The World'}]
let arrays   = porsches.concat(carros, movies, music, numero, astrono)
let output   = [ {'valorArrays': arrays}, {'valorSeparado': porsches[0]}, {'Array': array} ]

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(output));
}).listen(8080); 