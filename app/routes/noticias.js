module.exports=function(app){
	app.get('/noticias', function(req,res){
		app.app.controllers.noticias.noticias(app,req,res);
	});
	app.get('/noticia', function(req,res){
		app.app.controllers.noticias.noticia(app,req,res);
	});
	app.get('/excluir', function(req,res){
		app.app.controllers.noticias.excluir(app,req,res);
	});
	//Dentro da função de retorno é chamada a função excluir, a partir do controlador
	//essa função é responsável por pegar a requisição GET e excluir uma notícia. 
	app.get('/editar', function(req,res){
		app.app.controllers.noticias.editar(app,req,res);
	});
	////Dentro da função de retorno é chamada a função editar, a partir do controlador
	//essa função é responsável por pegar a requisição GET e editar a notícia. 
}