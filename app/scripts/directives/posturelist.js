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
      restrict: 'E',
        templateUrl: 'views/postureList.html',
        link: function postLink(scope,element,attrs) {
          //initializations
          scope.uisortable = attrs.uisortable;
          var originalAshanas = posturesFactory.getAllPostures();
          scope.ashanas = originalAshanas.slice();

          // configuration of the ui sortable
          scope.sortableOptions = {
            placeholder: 'ashana',
            connectWith: '.ashanas-container',
            forceHelperSize: true,
            opacity: 0.5,
            update: function (e, ui) {
            if (ui.item.sortable.droptarget.hasClass('ashanasSearch')) {
                ui.item.sortable.cancel();
              }
            },
            stop: function (e, ui) {
              if (angular.element(e.target).hasClass('ashanasSearch') &&
                  e.target !== ui.item.sortable.droptarget[0]) {
                scope.ashanas = originalAshanas.slice(); 
              }
            }
        };

      }
    };
  }]);
