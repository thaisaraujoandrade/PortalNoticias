var express= require('express'); 
var consign= require('consign');

var app=express(); //app é o express

var bodyParser = require('body-parser');//quando eu importo tem que executar, mas a execução é diferente

var expressValidator=require('express-validator');


app.set('view engine','ejs');
app.set('views', './app/views');
app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended:true}));//o express vai usar o bodyparser, e o objeto json é o extended
//informar o express que o bodyParser irá rodar no projeto, e é usado paar pegar os dados do formulário
app.use(expressValidator());


consign()
 	.include('app/routes') //para carregamento automatico das telas
 	.then('config/dbConnection.js')//incluindo a conexão com o banco de dados no consign
 	.then('app/models')
 	.then('app/controllers')
 	.into(app);
//o consign reconhece todos os arquivos da pasta routes(faz um scan), pega esses
//modulos e inclui dentro do servidor - app
module.exports=app;//o modulo vai retornar a variavel app
