var miloApp = angular.module("miloApp", ["ngRoute"]);

miloApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $routeProvider
        .when("/", {
            templateUrl: "partials/home.html",
            controller: "homeController"
        })
        .otherwise({
            redirectTo: "/"
        });

    $locationProvider.html5Mode(true);
}])