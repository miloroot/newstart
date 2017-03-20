var miloApp = angular.module("miloApp", ["ngRoute"]);

miloApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $routeProvider
        .when("/", {
            templateUrl: "partials/home.html",
            controller: "homeController"
        })
        .when("/about", {
            templateUrl: "partials/about.html",
            controller: "aboutController"
        })
        .when("/skills", {
            templateUrl: "partials/skills.html",
            controller: "skillsController"
        })
        .otherwise({
            redirectTo: "/"
        });

    $locationProvider.html5Mode(true);
}])