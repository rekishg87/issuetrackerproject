/**
 * Created by Rekish on 2-10-2015.
 */

angular.module("IssueTracker")
    .controller("LoginCtrl", ['$scope', function($scope) {
        $scope.login = function() {
            console.log("Login controller initialized...");
        }
    }]);
