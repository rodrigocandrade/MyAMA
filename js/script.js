
var myAMA = angular.module('myAMA', []);


// Controle principal
myAMA.controller('MainController', ['$scope','$http', function($scope,$http){

    // Nome do usuario
    $scope.username = 'Nome do Usuário';
    $scope.perguntas = [
      {'title':'Mensagem numero 1'},
      {'title':'Mensagem numero 2'},
      {'title':'Mensagem numero 3'}
    ];

      // Perguntas
      $scope.addQuestion = function(){
        $scope.perguntas.push({'title': $scope.newQuestion});
        $scope.newQuestion = '';
      };

      // Deletar posts
      $scope.deletar = function($index){
        $scope.perguntas.splice($index,1);
      };


      // Scripts para responder as perguntas




}]);
