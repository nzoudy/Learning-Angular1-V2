
var app = angular.module("clockApp", []);
app.controller("clockCtrl", MainClock);

function MainClock($scope) {
    var currentDate = new Date();
    $scope.timeString = currentDate.toTimeString();
    $scope.updateTime = function(){
        var currentDate = new Date();
        $scope.timeString = currentDate.toTimeString();
    }
    
}
