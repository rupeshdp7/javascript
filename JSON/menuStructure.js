angular.module("menuApp", []).controller("menuController",function($scope, $http){
    $scope.accountMenu = [];
    $http.get("./system_admin-menu.json").then(function(res){
        $scope.accountMenu = res.data;
    });
    $http.get("./res.json").then(function(res){
            $scope.pics = res.data.filter(function(obj){
                return obj.id <20;
            });
    })
});