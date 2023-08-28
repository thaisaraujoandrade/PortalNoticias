var mysql=require('mysql');

var connMySQL = function(){
	console.log('conexão com bd foi estabelecida');
    return mysql.createConnection(
		{
			host: 'localhost',
			user: 'root',
			password: 'ifms',
			database: 'portal_noticias'
		});
}

module.exports = function(){
	console.log('O autolad carregou o módulo de conexão com o bd')
	return connMySQL;
}

//da linha 1 a 12: esta conectando a função com o banco de dados
//as outras linhas retornam 