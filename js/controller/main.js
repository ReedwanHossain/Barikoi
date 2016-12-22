(function() {
    'use strict';

    var app = angular.module('myapp');

    app.controller('MainController', ['$scope', '$http', '$location', '$localStorage', function($scope, $http, $location, $localStorage) {

        $scope.$storage = $localStorage.$default({
            code: []
        });

        //  function getLocation() {
        //     if (navigator.geolocation) {
        //         navigator.geolocation.getCurrentPosition(showPosition);
        //     } else { 
        //        console.log("not supported");
        //     }
        // }

        // function showPosition(position) {
        //     $scope.ulat = position.coords.latitude;
        //     $scope.ulon = position.coords.longitude;
        // }
        // getLocation();


        var map;
        $scope.positions = [{
            "latitude": '23.8103',
            "longitude": '90.4125',
            "title": 'Marker 1',
            "index": 0
        }];

        $scope.$on('mapInitialized', function(evt, evtMap) {
            map = evtMap;
        });
        $scope.pinClicked = function(events, marker) {
            var pos = marker.$index;
            console.log('the marker ->', map.markers[0].title, ' was clicked');
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
                'latLng': map.markers[pos].getPosition()
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        $scope.latitude = map.markers[pos].getPosition().lat();
                        $scope.longitude = map.markers[pos].getPosition().lng();
                    } else {
                        console.log("not found");
                    }
                } else {
                    element.text('Geocoder failed due to: ' + status);
                }
            });
        }

        $scope.send_address = function() {
            $http.post('http://139.59.7.143/v1/place/post?longitude=' + $scope.longitude + '&latitude=' + $scope.latitude + '&Address=' + $scope.address)
                .success(function(res) {
                    $scope.code = res;
                    var newCode = {
                        'address': $scope.address,
                        'code': res
                    }
                    $scope.$storage.code.push(newCode);
                    console.log($scope.$storage.code);
                })
        };

        $scope.search_for_address = function() {
            $location.path('/locate/' + $scope.code);
        };

    }]);


}());