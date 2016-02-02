/*
 
 Na definição do phoneController adicionamos a variável $resource como parâmetro da função,
 que será injetada pelo AngularJS. 
 Usamos $resource para definir a criação da variável Phone. 
 Esta variável é criada e configurada como um resource, sendo o primeiro 
 parâmetro a url de acesso ao servidor.
 Na linha 16 temos o método getPhoneById que é chamado pela view e usa Phone.get para realizar
 uma chamada Ajax ao servidor.

 O mesmo acontece com os outros métodos, quando realizamos um save é realizado um POST no servidor, 
 segundo as especificações do RESTfull.
 
 realize os testes e depois visualize em ferramentas do desenvolvedor no browser de sua preferência 
 na opção network os estados de cada requisição.

*/

var $app = angular.module('app',['ngResource']);
	
$app.controller("phoneController",function ($scope,$resource){
		var Phone = $resource("/phones/:phoneId");
		
		$scope.getPhoneById = function(){
			Phone.get({phoneId:$scope.idPhone},function(data){
				$scope.phone=data;
			});
		}
		$scope.getPhones = function(){
			Phone.query(function (data){
				scope.phones = data;
			});
		}
		
		$scope.savePhone = function(){
			p = new Phone();
			p.number="1111-2222"
			p.$save();
		}
		$scope.deletePhone = function(){
			Phone.delete({phoneId:10});
		}
});