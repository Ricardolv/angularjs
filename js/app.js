/* 
 Nesta primeira parte, usamos o método angular.module para criar um módulo, cujo o nome é app.
 
 O segundo parâmetro é a referência ao módulo ngRoute, que é usado para criar as rotas 
 (lembre-se que ele deve ser incuído).
 
 Após criar o módulo e atribuí-lo a variável app, usamos o método config para configurar o módulo,
 neste caso estamos configurando uma funcionalidade chamada Router, que possui a função de
 carregar templates e controllers de acordo com uma URI, ou seja, um endereço repassado pelo
 navegador.

 A primeira configuração através do método when, que informa ao Router que,
 ao acessar a raiz do endereço web que o arquivo index.html está, deve ser carregado o controller
 listController e o template list.html .
	
 Tanto o template quanto o controller serão carregados no elemento html que contém a propriedade
 ng-view do index.html.

 Adicionamos mais uma rota, e agora configuramos que quando a URI for /edit/:name,
 o controller editController e o template form.html serão carregados. 
 O atributo :name será uma variável que poderá ser obtida no controller.

 Pode perceber que usamos o mesmo template form.html que contém um formulário
 para edição ou inserção de um registro.

 Configuramos a rota padrão da URI, que é ativada quando nenhuma rota configurada é
 encontrada.

 Em seguida usamos o método app.run para configurar a variável $scope da aplicação, em um
 contexto global ao módulo. 
 Neste método criamos a variável fruits que possui um contexto global à aplicação.
*/

var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
	when('/',{controller:'listController', templateUrl:'list.html'}).
	when('/edit/:name',{controller:'editController',templateUrl:'form.html'}).
	when('/new',{controller:'newController', templateUrl:'form.html'}).
	otherwise({redirectTo:'/'});
}]);

app.run(['$rootScope',function($rootScope) {
	$rootScope.fruits = ["banana","apple","orange"];
	console.log('app.run');
}]);


/* 
 Criamos três controllers para a aplicação, sendo que o primeiro, listController, 
 ainda não é utilizado, mas pode ser útil em um momento futuro.
 */

app.controller('listController',function ($scope) {
	console.log('listController');
});


/*
 O controller editController que possui três parâmetros:

 	• scope É o escopo da aplicação que pode ser utilizada no template do controller criado.
	• location Usada para realizar redirecionamentos entre as rotas
	• routeParams São os parâmetros repassados pela URI
 
 Preenchemos a variável $scope.title, para que o título do formulário mude, 
 lembrando que o formulário é usado tanto para criar um novo registro quando editá-lo.
 
 Pegamos como parâmetro o nome da fruta que foi repassada pela URI. 
 Este valor é pego de acordo com o parâmetro :name criado pela rota.

 Obtemos o índice do item que está para ser editado. 
 Usamos isso para poder editar o item no método save criado logo a seguir.
 
 O método save que é usado para “salvar” o registro no array global. 
 Em uma aplicação real estaríamos utilizando ajax para que o servidor persistisse o dado. 
 Redirecionamos a aplicação e com isso outro template será carregado.
 */

app.controller('editController', function ($scope,$location,$routeParams) {
	
	$scope.title = "Editar Fruta";
	$scope.fruit = $routeParams.name;
	$scope.fruitIndex = $scope.fruits.indexOf($scope.fruit);
	
	$scope.save = function() {
		$scope.fruits[$scope.fruitIndex]=$scope.fruit;
		$location.path('/');
	}
});

/*
 O controller semelhante ao editController e possui o
 método save onde um novo registro é inserido no array fruits.
 */

app.controller('newController', function ($scope,$location,$routeParams) {
	$scope.title = "Nova Fruta";
	$scope.fruit = "";
	
	$scope.save = function() {
		$scope.fruits.push($scope.fruit);
		$location.path('/');
	}
});