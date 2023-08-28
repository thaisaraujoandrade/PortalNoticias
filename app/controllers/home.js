var NoticiasDAO=require('../models/NoticiasDAO');

module.exports.index=function(app, req, res){
	var connection=app.config.dbConnection();
	var noticiasModel = new NoticiasDAO(connection); //O NoticiasDAO recebe um parâmetro connection, que é um objeto de conexão com o banco de dados.
	//E essa conexão é usada pelo NoticiasDAO para executar consultas e interagir com o banco de dados (oq acontece na linha a seguir)

	noticiasModel.get5UltimasNoticias(connection, function(error,result){////get5UltimasNoticias() consulta o banco de dados e retorna as últimas 5 notícias para mostrar na home
		res.render('home/home.ejs', {noticias:result}); //o código renderiza o arquivo home.ejs com as notícias retornadas. A variável result contém os dados das notícias
	});
}


