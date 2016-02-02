/*O arquivo simpleController.js contém a criação da app e a indicação do controller, que é criado
  de forma modularizada. 

  O nome do arquivo javaScript não precisa ser o mesmo, e com isso pode-se ter vários controllers 
  em somente um arquivo javaScript, bastando apenas registrá-lo na aplicação.
  
  Foi criado um módulo do angular na qual chamamos de  "app", e depois registramos um controller à este módulo.
			
  Neste controller, temos o parâmetro $scope que é um “ponteiro” para a aplicação em si, ou seja,
  $scope significa a própria página html. 

  Como o controller foi declarado no elemento "div" no nosso exemplo, no caso de um desenvolvimento real 
  seria em um elemento "body", $scope é usado para todo este elemento. 

  Usa-se o $scope para criar uma conexão entre o model e a view, como foi feito no exemplo utilizando o objeto user .*/

var app = angular.module('app', []);

app.controller('simpleController', function ($scope) {

	$scope.user = {name:"Bernardo"}

});