var express        = require('express'),
    bodyParser     = require('body-parser'),
    expressMongoDb = require('express-mongo-db'),
    http           = require('http');

var NegociacaoController = require('./controllers/api.js');


// inicializa o express
var app = express();

var server = http.createServer(app);

// inicializa o body parser
app.use(bodyParser.json());

// inicializa mongo e expoe para o express
app.use(expressMongoDb('mongodb://localhost:27017/valeMobiDataBase'));

// libera acesso à API de qualquer host/cliente
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// inicializa o servidor na porta especificada
server.listen(3000, '138.197.88.245');
server.on('listening', function() {
    console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});


// Endpoints:

// Registrar Negociacao
app.post('/negociacao', NegociacaoController.registrar);

// Retornar toda as Negociacao
app.get('/recuperar-negociacoes', NegociacaoController.listarTodos);
