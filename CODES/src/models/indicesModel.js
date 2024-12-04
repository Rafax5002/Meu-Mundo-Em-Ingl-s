var database = require("../database/config")

function registro(acertos,erros,fkUsuario,fkCategoria) {

    var instrucaoSql = `
        insert into indices values
        (default, ${acertos},${erros},${fkUsuario},${fkCategoria});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function selecao(fkUsuario){


    var comandoSelect =  `select count(fkCategoria) as agregado , categoria.nome, sum(acertos) as acertos, sum(erros) as erros from indices 
join categoria on idCategoria = fkCategoria
where fkUsuario = ${fkUsuario}
group by fkCategoria;`

console.log("Executando a instrução SQL: \n" + comandoSelect);
    return database.executar(comandoSelect);
}

function selecaoErros(){

var comandoSelect = `select sum(erros) as erros, nome from indices
join categoria on idCategoria = fkCategoria
group by fkCategoria 
order by erros desc;
`
console.log("Executando a instrução SQL: \n" + comandoSelect);
    return database.executar(comandoSelect);

}

module.exports = {
    registro,
    selecao,
    selecaoErros
};