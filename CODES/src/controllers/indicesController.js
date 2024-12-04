const indicesModel = require("../models/indicesModel");

function registro(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertos = req.body.pontosServer
    var erros = req.body.errosServer
    var fkUsuario = req.body.fkUsuarioServer
    var fkCategoria = req.body.fkCategoriaServer

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    indicesModel.registro(acertos,erros,fkUsuario,fkCategoria)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarDadosDash(req, res) {
    var idUsuario = req.params.usuario;
  
    indicesModel.selecao(idUsuario).then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]);
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
  }

  
function buscarErrosDash(req, res) {
    var idUsuario = req.params.usuario;
  
    indicesModel.selecaoErros(idUsuario).then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]);
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
  }
module.exports = {
    registro,
    buscarDadosDash,
    buscarErrosDash
}