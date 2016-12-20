(function() {
    'use strict';

    angular
        .module('myapp')
        .controller('LocateController', LocateController);

    LocateController.$inject = ['$scope', '$http', '$location', '$stateParams', 'urls'];

    function LocateController($scope, $http, $location, $stateParams, urls) {

        var init = function() {
            $http.get(urls.MAP_CODE + $stateParams.mapcode)
                .success(function(res) {
                    $scope.location = res;
                })
                .error(function(err) {
                    console.log(err);
                });
        }
        init();



    }

}());