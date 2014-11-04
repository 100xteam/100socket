'use strict';

/* Controllers */

angular.module('njax.online.controller', ['njax.socket.service'])
    .controller(
        'onlineCtl',
        [
            '$scope',
            '$rootScope',
            'NJaxSocketService',
            function($scope, $rootScope, NJaxSocketService) {
                NJaxSocketService.init($rootScope);
                $rootScope.$on('100innovation.auth.forgot.pass', function(event, data){
                    alert("You lost your password... but your logged in...hmmm");
                });
                $scope.validate = function(){


                }
                $scope.save = function(){


                }

            }
        ]
    );