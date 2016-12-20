(function() {
    'use strict';
    var app = angular.module('myapp', ['ui.router', 'ngMap', 'ngStorage']);

    app.constant('urls', {
        MAP_CODE: 'http://139.59.7.143/v1/place/get/'
    });



    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .state('locate', {
            url: '/locate/:mapcode',
            templateUrl: 'views/locate.html',
            controller: 'LocateController'
        });

    });

}());