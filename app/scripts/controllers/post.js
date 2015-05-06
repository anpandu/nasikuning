'use strict';

/**
 * @ngdoc function
 * @name cmsApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the cmsApp
 */
angular.module('cmsApp')
  .controller('PostCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
