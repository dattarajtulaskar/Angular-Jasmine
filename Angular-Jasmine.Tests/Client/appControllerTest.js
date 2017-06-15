/// <reference path="../../angular-jasmine/scripts/angular.min.js" />
/// <reference path="mockCall.js" />
/// <reference path="../../angular-jasmine/scripts/appmodule.js" />
/// <reference path="../../angular-jasmine/scripts/appcontroller.js" />

"use strict";
describe("Application Controller", function () {
    var createController,scope;
    beforeEach(function () {
        debugger;
        module('appModule');
        inject(function ($rootScope,$controller) {
            scope = $rootScope.$new();
            createController = function () {
                return $controller('appController', {
                    $scope: scope
                });
            };
        });
    });
    var $controller;
 
    it("Check If Valid", function() {
        var d = "Dattaraj";
        expect(d).toEqual("Dattaraj");
    });
    //it("Check If not Valid", function () {
    //    var d = "Dattaraj";
    //    expect(d).notEqual("Dattaraj2");
    //});

    //it("Test Controller", function() {

    //    createController();
    //    scope.Name = "Sudi";
    //    expect(scope.getData()).toEqual("Dattaraj");
    //});
});
