/// <reference path="../../angular-jasmine/scripts/angular.min.js" />
/// <reference path="angular-mocks.js" />
function mock(module, service, propertiesObject) {
    module(function ($provide) {
        $provide.value(service, propertiesObject);
    });
}