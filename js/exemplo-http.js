/*
	
 No controller da aplicação, criamos o método getData, que é executado quando clicamos no botão
 “GetData” da view (index.html). 
 Neste método, usamos a variável $http para as requisições Ajax.
 Repare que ela é repassada pelo parâmetro do controller, após o $scope. 
 Neste caso, o AngularJS encarrega-se de injetar o serviço http nesta variável.

 Na linha 24 temos o método $http.get onde estamos realizando uma requisição Ajax acessando o
 arquivo listFruits.html, que contém a resposta Json. 
 Neste método, podemos concatenar outro método chamado success, que é executado se a requisição HTTP GET for realizada com sucesso.
 Neste caso, a reposta do servidor estará armazenada na variável data, e poderemos acessar a variável
 data.fruits que contém o array de objetos que serão usados no loop da view.

 Na linha 30 temos o uso do console.log que pode ser usado em conjunto com o Firbug (Firefox)
 ou com o Google Chrome, para verificar resultados no console da janela “developer tools”. Pode-se
 usar o developer tools para analisar as chamadas ajax também, geralmente na aba Network.

 Com este simples exemplo conseguimos mostrar como é fácil realizar uma requisição Ajax para
 obter dados do servidor. 
 Pode-se usar o serviço $http para toda a sua aplicação, mas quando estamos utilizando RESTfull, 
 existe outro serviço que torna o acesso ao servidor mais abstrato, chamado de resource.

*/

var app = angular.module('app',[]);
	
app.controller('appController',function ($scope,$http){
	$scope.fruits = Array();
	
	$scope.getData = function(){
		
		$http.get("listFruits.html").success(function(data){
			$scope.fruits = data.fruits;
			console.log($scope.fruits);
		}).error(function(data) {

			alert("Error...");
			console.log(data);
		});
	}
});