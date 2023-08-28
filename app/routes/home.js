module.exports=function(app){

app.get('/', function(req,res){ 
		app.app.controllers.home.index(app,req,res);
});

}
//Essas linhas exportam uma função como parte de um módulo e configuram uma rota GET para a URL '/home' 
