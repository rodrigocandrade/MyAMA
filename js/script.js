
var myAMA = angular.module('myAMA', ['ngMaterial']);


// Controle principal
myAMA.controller('MainController', ['$scope','$http','$timeout', function($scope,$http,$timeout){



    // $scope Perguntas
    $scope.perguntas = [];

    $scope.myData = new Firebase("https://myamajs.firebaseio.com");

    $scope.myData.on('value', function(snapshot){
      $timeout(function(){
        $scope.perguntas = snapshot.val();
      });
    });


      // Perguntas
      $scope.addQuestion = function(){
        $scope.myData.push({perguntaFirebase:$scope.newQuestion});
        $scope.newQuestion = '';
      };


      // Deletar posts
      $scope.deletar = function($index){
        $scope.perguntas.splice($index,1);
      };


      // Scripts para responder as perguntas
      $scope.comments = [];

      $scope.userComments = function(){
        $scope.comments.push({'title':$scope.newComment});
        $scope.newComment = '';
      };

      // Deletar comments
      $scope.deletarComments = function($index){
        $scope.comments.splice($index,1);
      };



}]);
