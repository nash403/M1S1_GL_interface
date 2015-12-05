angular
  .module('pmr')
  .controller('carousel', function ($scope) {
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.slides =
      [
        {
          image: 'images/300.jpg',
          text: "Évenement 1"
        },
        {
          image: 'images/301.jpg',
          text: "Évenement 2"
        },
        {
          image: 'images/302.jpg',
          text: "Évenement 3"
        }
      ]
  });
