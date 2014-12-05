'use strict';

/**
 * @ngdoc function
 * @name yogasequenceAppSequence.controller:SequencecontrollerCtrl
 * @description
 * # SequencecontrollerCtrl
 * Controller of the yogasequenceAppSequence
 */
angular.module('yogasequenceAppSequence',['ui.sortable'])
  .controller('SequencecontrollerCtrl', function ($scope) {
    $scope.sequence=[];
    $scope.hasSequenceAshanas = function(){
        return ($scope.sequence.length>0);
    }
  });
