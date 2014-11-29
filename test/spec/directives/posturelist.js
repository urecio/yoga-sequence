'use strict';

describe('Directive: postureList', function () {

  // load the directive's module
  beforeEach(module('yogasequenceAppPosturelist'));

  var scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));
        it('should attach a list of all the ashanas to the scope', inject(function ($compile,posturesFactory) {
            var element = '<posture-list></posture-list>';

            $compile(element)(scope);

            scope.$digest();

            expect(scope.ashanas).toEqual(posturesFactory.getAllPostures());
        }));
    describe('postures factory', function () {
        var posturesFactory;
        beforeEach(inject(function ($injector){
            posturesFactory = $injector.get('posturesFactory');
        }));
        it('should return an specific ashana by id', function () {
            var ashana = posturesFactory.getPosturesById(1)[0];
            expect(ashana.id).toBe(1);
        });
        it('should search an string and return an array of matches', function () {
            var results = posturesFactory.searchPosture('ashana');
            for (var i=0;i<results.length;i++){
                expect(results[i].name).toContain('ashana');
            }

        });
        it('should have a method to retrieve all the ashanas', function () {
            expect(posturesFactory.getAllPostures()).toBeDefined();
        });
    });
    describe('search filter', function () {
        var searchFilter;
        beforeEach(inject(function($injector){
            searchFilter = $injector.get('searchFilter');
        }));
        it('should return the same array if doesnt receive any text', function () {
            expect(searchFilter(['kaka','kaka'],null)).toEqual(['kaka','kaka']);
        });
        it('should search if there is any text', inject(function (posturesFactory) {
            spyOn(posturesFactory, 'searchPosture');
            searchFilter(['kaka','kaka'],'kaka');
            expect(posturesFactory.searchPosture).toHaveBeenCalledWith('kaka');
        }));
    });

});
