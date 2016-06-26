'use strict';

dApp.factory('myGoogleAnalytics', [
    '$rootScope', '$window', '$location',
    function ($rootScope, $window, $location) {

        var myGoogleAnalytics = {};

        /**
         * Set the page to the current location path
         * and then send a pageview to log path change.
         */
        myGoogleAnalytics.sendPageview = function() {
            if ($window.ga) {
                $window.ga('set', 'page', $location.path());
                $window.ga('send', 'pageview');
            }
        }

        // subscribe to events
        $rootScope.$on('$viewContentLoaded', myGoogleAnalytics.sendPageview);

        return myGoogleAnalytics;
    }
]);

dApp.factory('scrollToElement', [function() {
    return function(scope, elem, attrs) {
        console.log(scope);
        var element = $(scope);
        var scrollAmount = $(element).offset().top;
        //console.log('Scroll amount is:'+scrollAmount);
        scrollAmount -= 49;
        //console.log('New Scroll amount is:'+scrollAmount);

        // Scroll
        $('html,body').animate({
                scrollTop: scrollAmount},
            'slow');
    };
}]);