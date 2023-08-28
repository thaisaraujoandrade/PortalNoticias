var app = require('./config/server.js');

//var rotaHome=require('./app/routes/home.js')(app); 

//var rotaNoticias=require('./app/routes/noticias.js')(app);

//var rotaForm_add_noticia=require('./app/routes/form_add_noticia.js')(app); //consig - carregar todos os arquivos da pasta routes 








app.listen(3000, function(){ 
	console.log('Servidor rodando com Express');
});
