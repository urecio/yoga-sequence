'use strict';

/**
 * @ngdoc directive
 * @name yogasequenceAppPosturelist.directive:postureList
 * @description
 * # postureList
 */
/*global $:false */
angular.module('yogasequenceAppPosturelist',[])
    .service('posturesFactory', function(Restangular, $q){
        
        var baseAshanas = Restangular.all('Ashanas');

        this.searchAshana = function(ashanas, text){
            //todo: search by text (this can by a filter with everything in an array or can be done with elasticsearch http://www.sitepoint.com/building-recipe-search-site-angular-elasticsearch/)
            return $.grep(ashanas, function(n){ // just use arr
                return n.name.match('^'+text);
            });
        };
        this.getAllPostures = function (){
            var deferred = $q.defer();
            baseAshanas.getList().then(function(ashanas){
                deferred.resolve(ashanas);
            });
            return deferred.promise;
        };
        
    })
    .filter('search',['posturesFactory', function(posturesFactory){
        return function(arr, text){
            if(!text){ return arr;}
            else {return posturesFactory.searchAshana(arr, text);}
        };
    }])
  .directive('postureList',['posturesFactory', function (posturesFactory) {
    return {
      restrict: 'E',
        templateUrl: 'views/postureList.html',
        link: function postLink(scope,element,attrs) {
          //initializations
          var originalAshanas = {};
          scope.uisortable = attrs.uisortable;
          //get all ashanas
          posturesFactory.getAllPostures().then(function(ashanas){
          originalAshanas = ashanas;
          scope.ashanas = originalAshanas.slice();  
          });
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
