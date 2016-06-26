'use strict';

var dApp = angular.module('designerApp',[
    'ngRoute',
    'ngSanitize',
    'angular-timeline',
    'ngDialog',
    'angular-carousel',
    'ngTextTruncate',
    'sn.skrollr'
]);


dApp.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/',{
        templateUrl:'../partials/landing-index.html',
        controller:'landingCtrl'
    })
    .when('/about',{
        templateUrl:'../partials/about.html',
        controller:'aboutCtrl'
    })

    .when('/freebies',{
        templateUrl:'../partials/freebies.html',
        controller:'freebiesCtrl'
    })

    .when('/contact',{
        templateUrl:'../partials/contact.html',
        controller:'contactCtrl'
    });

}]);

dApp.config(["snSkrollrProvider", function(snSkrollrProvider) {
    snSkrollrProvider.config = {
        smoothScrolling: true,
        forceHeight:        false
    };
}]);

dApp.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);

dApp.run(['$rootScope', '$location', '$window','snSkrollr',
    function($rootScope, $location, $window,snSkrollr) {

        if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
            snSkrollr.init();
        }

        $rootScope.$on('$routeChangeSuccess',
            function(event) {
                $window.scrollTo(0, 0);

                if (!$window.ga) {
                    return;
                }
                $window.ga('send', 'pageview', {
                    page: $location.path()
                });

        });



        // closing navbar collapse when content is loaded
        $rootScope.$on('$viewContentLoaded', function () {
            $(".nav a").click(function () {
                if ($(".navbar-collapse").hasClass("in")) {
                    $('[data-toggle="collapse"]').click();
                }
            });
        });


    }
]);