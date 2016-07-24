
dApp.controller('modalCtrl',['$scope','$rootScope','$http','ngDialog', function($scope, $rootScope,$http,ngDialog){

    $scope.images = $scope.$parent.instaImages;
    $scope.currentIndex = $scope.$parent.index;


    $scope.carouselNav = function(event){
        if(event.keyCode==39){
            $('#myCarousel').carousel('next');
        }

        else if(event.keyCode==37){
            $('#myCarousel').carousel('prev');
        }
    }


}]);