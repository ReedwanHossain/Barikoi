(function() {
    'use strict';
    var app = angular.module('myapp', ['ui.router', 'ngMap', 'ngMaterial', 'ngStorage']);

    app.constant('urls', {
        MAP_CODE: 'http://139.59.7.143/v1/place/get/'
    });



    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'MainController'
                // resolve : {
                //    getPosition : function() {

            //          function getLocation() {
            //             if (navigator.geolocation) {
            //                 navigator.geolocation.getCurrentPosition(showPosition);
            //             } else { 
            //                console.log("not supported");
            //             }
            //         }

            //         function showPosition(position) {
            //             lat = position.coords.latitude;
            //             lon = position.coords.longitude;
            //             var position = {
            //                 'lat' : lat,
            //                 'lon' : lon
            //             };

            //             return position;
            //         }
            //         getLocation();
            //    }

            // }
        })

        .state('locate', {
            url: '/locate/:mapcode',
            templateUrl: 'views/locate.html',
            controller: 'LocateController'
        })

        .state('location', {
            url: '/ltable',
            templateUrl: 'views/location-table.html',
            controller: 'LocationTableController'
        });

    });

}());