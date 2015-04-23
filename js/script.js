
var myAMA = angular.module('myAMA', []);

// Controle principal
myAMA.controller('MainController', ['$scope','$http', function($scope,$http){

    $scope.perguntas = [
      {'title':'Olá!'},
      {'title':'Esta é a primeira pergunta!?'},
      {'title':'Esta é a segunda pergunta!'},
      ];

      $scope.addQuestion = function(){
        $scope.perguntas.push({'title': $scope.newQuestion});
        $scope.newQuestion = '';

      }
}]);
