	function NoticiasDAO(connection){//criando uma classe e passando como parâmetro uma conexão, se eu tenho uma forma quer dizer que tem uma classe

		this.getNoticias=function(connection, callback){ //get é pegar, ler noticias, 
			connection.query('select * from noticias ORDER BY data_criacao desc', callback);//é um modulo, que tem mais de um método
		}
		this.getNoticia=function(connection, id_noticia, callback){
			connection.query('select * from noticias where id_noticia='+id_noticia.id_noticia, callback);
		}

		this.salvarNoticia=function(noticia, connection, callback){
			connection.query('insert into noticias set ?', noticia, callback);
		}
		this.get5UltimasNoticias=function(connection, callback){
			connection.query('select * from noticias order by data_criacao desc limit 5', callback); 
			//order by data_criacao desc Faz com que mostre as últimas notícias primeiros.
			//limit 5 – Mostra somente 5 notícias.
		}
		this.excluirNoticia=function(connection,id_noticia,callback){ 
			connection.query('delete from noticias where id_noticia='+id_noticia.id_noticia, callback);
		} 
		//a função excluir recebe três parâmetros: connection, que representa o objeto de conexão com o bd; 
		//id_noticia, que contém a identificação da notícia a ser excluída; e callback, que é a função de retorno a ser executada após a exclusão da notícia
		// essas linhas executam uma consulta SQL para excluir a notícia do bd, usando o id_noticia fornecido eo resultado ou erro da consulta é enviado para a função callbackde.
		
		this.atualizarNoticia=function(connection, noticia, callback){
			connection.query("update noticias set titulo = '"+noticia.titulo+"',noticia='"+noticia.noticia+"',resumo='"+noticia.resumo+"',autor='"+noticia.autor+"',data_notica='"+noticia.data_notica+"'where id_noticia="+noticia.id_noticia, callback);
		}
		//a função excluir recebe três parâmetros: connection, que faz conexão com o bd; 
		//id_noticia, que contém a identificação da notícia que vai ser editada; e callback, que é a função de retorno a ser executada após a exclusão da notícia
		//essa terceira linha executa uma consulta SQL no objeto connectionutilizando o método query() e UPDATE é usada para modificar registros na tabela,  condição WHERE é especificada para atualizar a notícia com base não id_noticia fornecida.
		this.mostraNoticia=function(connection, id_noticia, callback){
			connection.query('select * from noticias where id_noticia='+id_noticia, callback);
		}
	}
		module.exports = NoticiasDAO;  //exportando o módulo NoticiasDAO

	// O método query()é usado para enviar uma consulta SQL ao banco de dados.

	//sobreescrever variavel, manipula o bd com objeto é a melhor prática(Design de Desenvolvimento de Software
	 //DAO)d--> Data, A-->A, O-->Object
	 //Acesso a dados por meio de objeto(um objeto nasce, faz aquilo que tem que fazer, depois morre). 

	 //palavra this é uma palavra reservada para classe.


	
