var NoticiasDAO = require('../models/NoticiasDAO');
module.exports.noticias=function(app,req,res){

	var connection = app.config.dbConnection();
	var noticiasModel=new NoticiasDAO(connection);

	noticiasModel.getNoticias(connection, function(error,result){
		if (error){
			console.log(error);
		}
	res.render('noticias/noticias.ejs',{noticias:result}); 
	});

}
	module.exports.noticia=function(app,req,res){
		var connection=app.config.dbConnection();
		var noticiasModel = new NoticiasDAO(connection);

		if (req.query.id_noticia){
		var id_noticia = req.query; //id_noticia recebe o parametro enviado pelas views
		// que contém o id da noticia a ser exibida
		} else {
			res.redirect('/noticias');
			return
		}
		
		noticiasModel.getNoticia(connection, id_noticia, function(error,result){
			if (error){
				console.log(error);
			}
		res.render('noticias/noticia.ejs',{noticia:result}); 
	});
}
	module.exports.excluir=function(app,req,res){
		var pesquisa=req.body.pesquisa;
		var connection=app.config.dbConnection();
		var noticiasModel = new NoticiasDAO(connection);

		if (req.query.id_noticia){
		var id_noticia = req.query; //id_noticia recebe o parametro enviado pelas views
		// que contém o id da noticia a ser exibida
		} else {
			res.redirect('/noticias');
			return
		}
		
		noticiasModel.excluirNoticia(connection, id_noticia, function(error,result){
			res.redirect('/noticias'); 
	});
}
	module.exports.editar=function(app,req,res){
		var connection=app.config.dbConnection();
		var noticiasModel = new NoticiasDAO(connection);

		if (req.query.id_noticia){
		var id_noticia = req.query; 
		} 
		else {
			res.redirect('/noticias');
		}
		noticiasModel.getNoticia(connection, id_noticia, function(error,result){
			res.render('admin/form_update_noticia',{validacao:{}, noticia:result});
	}); //utilizamos o body parser para gravar no id_noticia o id da noticia a ser editada
}

		




