var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
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
});