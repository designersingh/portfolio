
dApp.controller('modalCtrl',['$scope','$rootScope','$http','ngDialog', function($scope, $rootScope,$http,ngDialog){

    $scope.images = $scope.$parent.instaImages;
    $scope.currentIndex = $scope.$parent.index;

}]);