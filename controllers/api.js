var ObjectID = require('mongodb').ObjectID,
    isEmpty  = require('is-empty');

// listar todas as negociações
exports.listarTodos = function (req, res) {
    req.db.collection('negociacao').find().toArray(function(err, result) {
        if (err) {
          return console.log(err)
        };

        res.send(result);
    });
};

// registrar as negociação
exports.registrar = function (req, res){
  var dadosNegociacao = req.body;

  // Verificação da tabela
  if(isEmpty(dadosNegociacao.cM && dadosNegociacao.tM && dadosNegociacao.nM && dadosNegociacao.qM &&
              dadosNegociacao.pM && dadosNegociacao.tN && dadosNegociacao.dN))
  {
    return res.sendStatus(403);
  }
  else
  {
    req.db.collection('negociacao').save(dadosNegociacao, function(err, result)
    {
      if (err) {
        return res.sendStatus(503);
      }
      res.sendStatus(200);
    });
  }
};
