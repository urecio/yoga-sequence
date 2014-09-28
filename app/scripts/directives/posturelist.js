'use strict';

/**
 * @ngdoc directive
 * @name yogasequenceAppPosturelist.directive:postureList
 * @description
 * # postureList
 */
/*global $:false */
angular.module('yogasequenceAppPosturelist',[])
    .factory('posturesFactory', function(){
        var posturesJson = [
            {'id':1,'name':'ashana1',
                'shortname':'ashana1'},
            {'id':2,'name':'ashana2',
                'shortname':'ashana2'},
            {'id':3,'name':'ashana3',
                'shortname':'ashana3'},
            {'id':4,'name':'ashana4',
                'shortname':'ashana4'},
            {'id':5,'name':'ashana5',
                'shortname':'ashana5'}
//            ,
//            {'id':6,'name':'ashana6',
//                'shortname':'ashana6'},
//            {'id':7,'name':'ashana7',
//                'shortname':'ashana7'},
//            {'id':8,'name':'ashana8',
//                'shortname':'ashana8'},
//            {'id':9,'name':'ashana9',
//                'shortname':'ashana9'},
//            {'id':10,'name':'ashana10',
//                'shortname':'ashana10'}
        ];
        var getPosturesById = function(id){
            //todo: search by id from the database
            return $.grep(posturesJson, function(n){ // just use arr
                return n.id === id;
            });
        };
        var searchPosture = function(text){
            //todo: search by text (this can by a filter with everything in an array or can be done with elasticsearch http://www.sitepoint.com/building-recipe-search-site-angular-elasticsearch/)
            return $.grep(posturesJson, function(n){ // just use arr
                return n.name.match('^'+text);
            });
        };
        var getAllPostures = function (){
            //todo: return from database
            return posturesJson;
        };
        return {
            getPosturesById : getPosturesById,
            searchPosture : searchPosture,
            getAllPostures : getAllPostures
        };
    })
    .filter('search',['posturesFactory', function(posturesFactory){
        return function(arr, text){
            if(!text){ return arr;}
            else {return posturesFactory.searchPosture(text);}
        };
    }])
  .directive('postureList',['posturesFactory', function (posturesFactory) {
    return {
      template: '<input type="text" ng-model="searchText" placeholder="search any ashana"/>' +
            '<div ng-if="uisortable" ui-sortable="sortableOptions" ng-model="ashanas"' +
      'class="ashanas-container col-lg-1 col-lg-offset-1" style="border:1px solid blue;height: 100px">' +
      '<div class="col-xs-6 col-lg-4 col-lg-offset-0 no-padding-left ashana {{ ashana.shortname }}"' +
      'ng-repeat="ashana in ashanas | search:searchText"></div>' +
      '</div>' +
        '<div ng-if="!uisortable" class="col-xs-6 col-lg-4 col-lg-offset-0 no-padding-left ashana {{ ashana.shortname }}" ' +
          'ng-repeat="ashana in ashanas | search:searchText"></div>',
      restrict: 'E',
      link: function postLink(scope,element,attrs) {
          //initializing scope with attrs
          scope.uisortable = attrs.uisortable;
          scope.ashanas = posturesFactory.getAllPostures();

      }
    };
  }]);
