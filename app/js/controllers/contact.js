
dApp.controller('contactCtrl',['$scope','$rootScope','$http', function($scope, $rootScope, $http){

    var api_key = 'key-2a7bcca2942a0d21bd8273f1e19e925f';
    var apiUrl = 'https://api.mailgun.net/v3/dsignr.io/messages';

    var json = {
        'from':'Website',
        'to':'tajinderpalsohi@gmail.com',
        'subject':'Hello',
        'text':'Testing some Mailgun awesomness!'
    }


   /*$http.defaults.headers.post["Content-Type"] = "application/json";
    $http.post(apiUrl, json)
        .then(function(data){
            console.log(data);
        });*/

}]);