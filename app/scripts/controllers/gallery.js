'use strict';

/**
 * @ngdoc function
 * @name cmsApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the cmsApp
 */
angular.module('cmsApp')
  .controller('GalleryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
