'use strict';

/**
 * @ngdoc function
 * @name cmsApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the cmsApp
 */
angular.module('cmsApp')
  .controller('CategoryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
