var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "main.html"
        })
        .when("/InvestmentStrategy", {
            templateUrl: "investmentstrategy.html"
        })
        .when("/Management", {
            templateUrl: "management.html"
        })
        .when("/Exits", {
            templateUrl: "exits.html"
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});