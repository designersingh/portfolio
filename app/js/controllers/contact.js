
dApp.controller('contactCtrl',['$scope','$rootScope','$http', function($scope, $rootScope, $http){

    $scope.services = [
        {id:1, label:"Consulting", value:"Consulting"},
        {id:3, label:"UI/UX Design", value:"UI/UX Design"},
        {id:4, label:"UI Architecture", value:"UI Architecture"},
        {id:5, label:"Web Development", value:"Web Development"},
        {id:6, label:"Mobile App Development", value:"Mobile App Development"},
        {id:7, label:"Custom Training", value:"Custom Training"}
    ];


    $scope.submitQuery = function (contact) {
        $scope.errorMsg = false;
        $scope.successMsg = false;
        $scope.alertMsg = null;

        if(!contact || !contact.name || !contact.email || !contact.service || !contact.description){
            console.log('something is wrong');
            $scope.errorMsg = true;
            $scope.alertMsg = 'All field are mandatory. Please double check all the information and try again.';
            return;
        }

        var isEmailValid = /^([^\W])([\w-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(contact.email);

        if(!isEmailValid){
            console.log('Invalid Email');
            $scope.errorMsg = true;
            $scope.alertMsg = 'Please enter a valid email.';
            return;
        }

        var json = {
            'name'          :contact.name,
            'email'         :contact.email,
            'service'       :contact.service.value,
            'description'   :contact.description
        };

        $http.post('/api/v1/contact', json)
            .success(function(response){
                console.log(response);
                $scope.contact = null;
                $scope.Form.$setPristine(true);

                $scope.successMsg = true;
                $scope.alertMsg = 'Your email was sent successfully. Someone from our team will be contacting you within one business day.';
                scrollToElement('.alert');

                fbq('track', 'Lead');
                fbq('track', 'Contacted using contact form.');

            })
            .error(function(response){
                console.log(response);
                $scope.errorMsg = true;
                $scope.alertMsg = 'Oh-uh. Something went wrong while sending your information.Please try one more time.';
            });

    }

}]);