
dApp.controller('headerFooterCtrl',['$scope','$rootScope','$sce','$location', function($scope, $rootScope,$sce,$location){

    $scope.topNav = function(){
        $(window).scroll(function() {

            var scrollTop = $(window).scrollTop();
            if (scrollTop > 100) {
                // > 100px from top - show div
                $('#header').css({
                    'background':'rgba(0,114,255,.95)',
                    'padding':'5px 15px',
                    'box-shadow': '0px 1px 4px 0px rgba(150,150,150,.4)'

                });
            }else if(scrollTop <100){
                $('#header').css({
                    'background':'transparent',
                    'padding':'20px 15px',
                    'box-shadow':'none'
                });
            }
        });
    }

    // navbar collapse  clicking on menu items for mobile devices
    /*var btnMenu = angular.element('.navbar-toggle');
    angular.element('.navbar-nav li a').unbind('click').click(function () {
        if (btnMenu.length && btnMenu.is(':visible')) {
            angular.element('.collapse').collapse('hide');
        }
        $rootScope.location = $location;
    });*/


}]);