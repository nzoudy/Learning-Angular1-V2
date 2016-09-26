
var app = angular.module("ngModelExamples", []);

app.controller("ExamplesCtrl", ExamplesCtrl);

function ExamplesCtrl($scope){
    $scope.textboxChange = function(){
        console.log("textbox value changed");
    };

};
