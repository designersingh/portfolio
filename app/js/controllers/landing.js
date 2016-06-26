
dApp.controller('landingCtrl',['$scope','$rootScope','$http', function($scope, $rootScope,$http){

    $scope.quotes = [
                        {
                            author: 'Brian Reed',
                            quote: '<b>Everything is designed.</b> Few things are designed well.'
                        },
                        {
                            author: 'Ralph Caplan',
                            quote: '<b>Thinking about design</b> is hard, but not thinking about it can be disastrous.'
                        },
                    ];

    var dribbbleToken = '82dcd25082e3613323549a4cd362388d477928450775920254e74e498bf1242b'
    var apiUrl ='https://api.dribbble.com/v1/users/designersingh/shots?access_token='+ dribbbleToken;

    $http.get(apiUrl)
        .success(function(data){
            $scope.dribbble = data;
        })
        .error(function(data){
            console.log(data);
        });




}]);