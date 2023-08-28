module.exports=function(app){

	app.get('/formulario_inclusao_noticia',function(req,res){
		app.app.controllers.admin.formulario_inclusao_noticia(app,req,res);
	});
	//Essas linhas exportam uma função como parte de um módulo e configuram uma rota GET para a URL '/formulario_inclusao_noticia' 

	app.post('/noticia/salvar', function(req,res){
		app.app.controllers.admin.noticias_Salvar(app,req,res);
	});
	// Essas linhas configuram uma rota POST para a URL '/noticia/salvar'. Essa função é responsável por pegar essa requisição POST e salvar a notícia no banco de dados
	app.post('/atualizar', function(req, res){
		app.app.controllers.admin.noticias_atualizar(app,req,res);
	});
	// Essa linha configura uma rota POST para a URL '/atualizar'. Ou seja, quando fizer uma solicitação POST para essa rota, uma função de retorno de chamada será executada.
	// Dentro da função de retorno, a função de atualizar é chamada a partir do controlador e atualiza uma notícia no banco de dados.

}