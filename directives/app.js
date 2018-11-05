var app = angular.module('mainApp', []);//app.js

app.directive("myEmployee", function () {
  return {
    restrict: 'E',
    scope: {},
    template: '<br><br> <input type="text" ng-model="someText"> {{someText}}'
  };
});

function myController($sc,ms, $window) {
  $sc.name = "Rupesh";
  $sc.stringInp = "BRUNCH";
  $sc.scrambledString = ms.scramble($sc.stringInp);
  //console.log($sc.scrambledString);
 /*  setTimeout(function(){
    console.log("timeout");
    $window.location.reload();
  },5000) */
}

function myService() {
  this.scramble = function (input) {
    var len = input.length;
    var scrambledArray = input.split("");
    //split array,
    var outArray=[];
    for(var i=0; i<len;i++){
      var temp="";
      for(var j=0;j<len;j++){
        for(var k=0;k<len;k++){
          for(var l=0;l<len;l++){
            for(var m=0;m<len;m++){
              if(i!=j && i!=k && i!=l && j!=k && j!=l && k!=l && i!=m && j!=m && k!=m && l!=m){
                temp = scrambledArray[i]+scrambledArray[j]+scrambledArray[k]+scrambledArray[l]+scrambledArray[m];
                if(!outArray.includes(temp))
                  outArray.push(temp);
              }
            }
          }
        }
      }
    }
    return outArray;
  }
}

app.controller("myController", ['$scope', 'myService', "$window", myController]);
app.service("myService", myService);
function createDirective(name){  
  return function(){
    return {
      restrict: 'E',
      compile: function(tElem, tAttrs){
        console.log(tElem.html());
        console.log(name + ': compile');
        return {
          pre: function(scope, iElem, iAttrs){
            console.log(name + ': pre link');
            console.log(iElem.html());
          },
          post: function(scope, iElem, iAttrs){
            console.log(name + ': post link');
            console.log(iElem.html())
          }
        }
      }
    }
  }
}

app.directive('levelOne', createDirective('levelOne'));  
app.directive('levelTwo', createDirective('levelTwo'));  
app.directive('levelThree', createDirective('levelThree'));  
