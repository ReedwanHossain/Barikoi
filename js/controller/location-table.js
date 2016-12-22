(function() {
    'use strict';

    angular
        .module('myapp')
        .controller('LocationTableController', LocationTableController);

    LocationTableController.$inject = ['$scope', '$http', '$location', 'urls'];

    function LocationTableController($scope, $http, $location, urls) {

        var init = function() {
            $http.get(urls.MAP_CODE)
                .success(function(res) {
                    $scope.locations = res;
                })
                .error(function(err) {
                    console.log(err);
                });
        }
        init();



    }

}());