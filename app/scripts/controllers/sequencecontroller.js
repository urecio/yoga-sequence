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
        $scope.sortableOptions = {
            placeholder: 'ashana',
            connectWith: '.ashanas-container',
            forceHelperSize: true,
            opacity: 0.5
        };
        //todo: fix the weird behaviour. Check the config because without the placeholder property it works better
        //http://codepen.io/thgreasi/pen/uFile
        $scope.sequence =[{'id':1,'name':'ashana1',
            'shortname':'ashana1'},
            {'id':2,'name':'ashana2',
                'shortname':'ashana2'},
            {'id':3,'name':'ashana3',
                'shortname':'ashana3'},
            {'id':4,'name':'ashana4',
                'shortname':'ashana4'},
            {'id':5,'name':'ashana5',
                'shortname':'ashana5'}];



  });
