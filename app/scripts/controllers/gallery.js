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
    $scope.images = [
      'http://ppcdn.500px.org/52866292/9e944f286e9ba110135839dca1aff8a18e18ffe8/2048.jpg',
      'http://i.imgur.com/YY3bLP7.jpg',
      'http://i.imgur.com/9lDdLYR.jpg',
      'http://i.imgur.com/1mAzNUY.jpg',
      'https://ppcdn.500px.org/96496237/c4fed65b554428956caf9c1792fbe9ad88131b24/2048.jpg',
      'http://i.imgur.com/fYYulaI.jpg',
      'http://i.imgur.com/gVX4eUj.jpg',
      'http://i.imgur.com/P0b09BO.jpg',
      'http://i.imgur.com/Eq0Z7vm.jpg',
      'http://i.imgur.com/XxMKKi1.jpg'
    ];

    $scope.bigImage = {
    	src : 'http://ppcdn.500px.org/52866292/9e944f286e9ba110135839dca1aff8a18e18ffe8/2048.jpg',
    	permasrc : 'http://ppcdn.500px.org/52866292/9e944f286e9ba110135839dca1aff8a18e18ffe8/2048.jpg',
    	setSrc : function (_img) {
	    	$scope.bigImage.src = _img;
	    },
	    setPermaSrc : function (_img) {
	    	$scope.bigImage.permasrc = _img;
	    },
	    applyPermaSrc : function () {
	    	$scope.bigImage.src = $scope.bigImage.permasrc;
	    }
    };
  });
