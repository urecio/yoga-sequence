'use strict';

/**
 * @ngdoc function
 * @name yogasequenceAppSequence.controller:SequencecontrollerCtrl
 * @description
 * # SequencecontrollerCtrl
 * Controller of the yogasequenceAppSequence
 */
angular.module('yogasequenceAppSequence',['ui.sortable','ngDragDrop'])
  .controller('SequencecontrollerCtrl', function ($scope) {
     $scope.sequence = [];
  });
