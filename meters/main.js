var app = angular.module("app", ['angular.filter']);
app.controller("meterController", myController);

function myController($scope, $http, csvConvertor, $filter) {
    $scope.meters = [];
    $scope.data = [];
    console.time("fileRead");
    $http.get('Sorted_Connection_Histories/ConnectionList(1-50Meters).csv').then(function (res) {
        $scope.data = csvConvertor.csvConvertor(res.data);
        return $http.get('Sorted_Connection_Histories/ConnectionList(51-100Meters).csv');
    }).then(function (res) {
        $scope.data = $scope.data.concat(csvConvertor.csvConvertor(res.data));
        return $http.get('Sorted_Connection_Histories/ConnectionList(101-150Meters.csv');
    }).then(function (res) {
        $scope.data = $scope.data.concat(csvConvertor.csvConvertor(res.data));
        return $http.get('Sorted_Connection_Histories/ConnectionList(151-200Meters).csv');
    }).then(function (res) {
        $scope.data = $scope.data.concat(csvConvertor.csvConvertor(res.data));
        return $http.get('Sorted_Connection_Histories/ConnectionList(201-250Meters).csv');
    }).then(function (res) {
        $scope.data = $scope.data.concat(csvConvertor.csvConvertor(res.data));
        return $http.get('Sorted_Connection_Histories/ConnectionList(251-300Meters).csv');
    }).then(function (res) {
        $scope.data = $scope.data.concat(csvConvertor.csvConvertor(res.data));
        return $http.get('Sorted_Connection_Histories/ConnectionList(301-322Meters).csv');
    }).then(function (res) {
        $scope.data = $scope.data.concat(csvConvertor.csvConvertor(res.data));
        $scope.sortRecords();
        console.timeEnd("fileRead");

    });
    $scope.sortRecords = function () {
        var uniqueMeters = new Set();
        $scope.data.forEach(function (meter) {
            meter.date = Date.parse(meter.Dateinmeter);
            if (!(uniqueMeters.has(meter.Meter)))
                uniqueMeters.add(meter.Meter);
        });
        $scope.uniqueMeters = [...uniqueMeters];
        $scope.meterWiseRecords = [];
        for (let i = 0, j = $scope.uniqueMeters.length; i < j; i++) {
            var obj = {};
            obj.meter = $scope.uniqueMeters[i];
            obj.records = $filter('findmeter')($scope.data, $scope.uniqueMeters[i]);
            if(i==1){
                console.log(typeof obj.date)
            }
            $scope.meterWiseRecords.push(obj);
        }
        console.log($scope.meterWiseRecords);
    }
}
var isEmpty = function (inputStr) {
    if (null == inputStr || "" == inputStr || "undefined" == inputStr || "NaN" == inputStr || (isNaN(inputStr) && (typeof inputStr === "string") && !(inputStr.length > 0))) {
        return true;
    }
    return false;
};
app.filter('slice', function () {
    return function (arr, start, end) {
        return (arr || []).slice(start, end);
    };
});
app.filter('findmeter', function () {
    return function (list, obj) {
        return list.filter(function (l) {
            if (obj == l.Meter) {
                return true;
            }
        });
    };
});