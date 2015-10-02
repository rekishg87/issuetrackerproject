/**
 * Created by Rekish on 2-10-2015.
 */

var app = angular.module("IssueTracker", ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/signup', {
                templateUrl: 'public/signup/signup.html',
                controller: 'SignupCtrl'
            })
            .otherwise({
                redirectTo: '/signup'
            })
    }]);
