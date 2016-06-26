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