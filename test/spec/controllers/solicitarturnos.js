'use strict';

describe('Controller: SolicitarturnosCtrl', function () {

  // load the controller's module
  beforeEach(module('adamantiumMobileApp'));

  var SolicitarturnosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SolicitarturnosCtrl = $controller('SolicitarturnosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SolicitarturnosCtrl.awesomeThings.length).toBe(3);
  });
});
