
dApp.controller('aboutCtrl',['$scope','$rootScope','$http','ngDialog', function($scope, $rootScope,$http,ngDialog){

    $http.defaults.useXDomain = true;

    var instaClientId = '28e350726b434928855a5d29c6df4857';
    var userId = '283255464';
    var token = '283255464.28e3507.18410f6835fa44f6828032ec1f3bbb8b';
    var endPoint = 'https://api.instagram.com/v1/users/'+ userId +'/media/recent/?count=40&access_token='+ token;


    $scope.initAbout = function(){
        $scope.getInstaFeed();
    }


    $scope.getInstaFeed = function()
    {

        $http.jsonp(endPoint+'&callback=JSON_CALLBACK')
            .success(function(data, status, headers, config){
                $scope.instaImages = data.data;

            })
            .error(function(data, status, headers, config){
                console.log(data);
            })

    }


    $scope.showInstaDialog = function(data,index){

        $scope.index = index;

        ngDialog.open({
            template: 'partials/modal/instaDialog.html',
            controller: 'modalCtrl',
            scope:$scope,
            className: 'ngdialog-theme-default',
        });

    }

    $scope.aboutText ="<b>Who Am I?</b> Well, that\'s an interesting question. I guess, I am still exploring myself. I was born and raised in Kapurthala, A Royal city in Punjab region of India. I fell in love in design when I was like 11. First software I learned was Corel Draw(If anyone remember it now). I always had a creative side to me but didn\'t quite know what I want to be when I grow up. I finished my high school and joined Bachelors Of Multimedia(B.M.M) at Apeejay College of Fine Arts, Jalandhar. My degree was consist of various creative fields like Graphic Design, Web Design drawing, sculpture, Photography, Stop Motion, Videography, Video Editing, 2D/3D animation etc. In my 2nd year of the degree, I was introduced to Graphic Design and Web Design and I instantly knew what I want to do for rest of my life. I was crazy about Design (Still am), creating something from scratch was a very satisfying experience for me. I started working as a Graphic/Web Designer first as a freelancer and later on in a local web design firm. I loved each and every bit of it. I am always intrigued by new things a gadget, CSS technique, web animation etc anything that\'s interesting I explore it and learn it. I think this habit of mine made my passion even more fun. <br><br> In July 2010, I moved to beautiful sunny Fremont, California with my family and started working as a freelance Web designer. In 2012, I founded my own company called Dazzle5 Design Studio where I have worked extensively in Graphic/Print Design, UI/UX design and Front End Development. I have consulted many early stage startups for UI/UX and Front-End Development. <br><br> Now I work as a Lead Front-End Developer at an Awesome Startup in Santa Clara called <a href='https://pley.com'>Pley</a>, A LEGO rental service. Yup, We rent LEGOS and I get to see and play with awesome new toys every day. So, this is me, living the life doing what I love the most and making world perfect one pixel at a time :)";


    $scope.events = [
        {
            badgeClass: 'info',
            company: 'Pley',
            duration: 'Jan 2015 - Present',
            badgeIconClass: 'fa fa-bookmark',
            title: 'Lead UI/UX/Front-End Developer',
            content: "<b>I am lead UX/UI/Front-End developer. My job responsibilities include </b> <br/>• Responsible for product UI from scratch and creating prototypes. <br/>• Brainstorm and implement UI solutions for various projects and multiple teams both onsite and remote <br/>• Initiated User research, Usability and Concept testing <br/>• Created UI sketches, flows, wireframes and rapid prototypes for Web and Mobile platforms <br/>• Worked on different projects including built up from scratch <br/>• Used a wide variety of software to complete the projects including Photoshop, Illustrator and coding such as HTML5, CSS3, JavaScript / jQuery"
        },
        {
            badgeClass: 'info',
            company: 'Dazzle5 Design Studio',
            duration: 'Aug 2010 - Dec 2014',
            badgeIconClass: 'fa fa-bookmark',
            title: 'UI/UX/Front-End Developer',
            content: "<b>My job responsibilities include </b> <br/>• Provide user interface design for Web-based projects, including dashboards, widgets, and products. <br/>• Develop HTML prototypes and UI deliverables, such as wireframes, flowcharts, screen mock-ups, and interface design specifications. <br/>• Assist with walk-throughs and usability testing. Update UI per changing needs and requirements. <br/>• Publishing: newsletters, magazines, books <br/>• Marketing: direct mail, brochures, conference materials, circulation, stationery, and identity/branding <br/>• Advertising: small- and big-budget ads designed and placed in magazines and newspapers <br/>• Creating the layout for documentation and supporting print media with graphics and illustrations. <br/>• Meeting deadline driven projects that require strong multi-tasking skills, client and vendor coordination, and the ability to juggle shifting priorities."
        },
        {
            badgeClass: 'info',
            company: 'Ushur.me',
            duration: 'Mar 2014 - Aug 2014',
            badgeIconClass: 'fa fa-bookmark',
            title: 'Lead UI/UX Developer',
            content: "<b>I lead the UX/UI design initiative for company's product: Chat Widget. My job responsibilities include </b> <br/>• Responsible for product UI from scratch and creating prototypes. <br/>• Brainstormed and implemented UI solutions for various projects and multiple teams both onsite and remote <br/>• Initiated User research, Usability and Concept testing <br/>• Created UI sketches, flows, wireframes and rapid prototypes for Web and Mobile platforms <br/>• Worked on different projects including built up from scratch <br/>• Used a wide variety of software to complete the projects including Photoshop, Illustrator and coding such as HTML5, CSS3, JavaScript / jQuery"
        },
        {
            badgeClass: 'info',
            company: 'Khalis Foundation',
            duration: 'May 2013 - Feb 2014',
            badgeIconClass: 'fa fa-bookmark',
            title: 'Lead UI/UX Developer',
            content: "<b> I lead the UX/UI Development for company's various products. My job responsibilities include </b> <br/>• Responsible for product UI from scratch and creating prototypes. <br/>• Brainstormed and implemented UI solutions for various projects and multiple teams both onsite and remote <br/>• Collaborated with Visual Designers and Content Strategists <br/>• Created UI sketches, flows, wireframes and rapid prototypes for Web and Mobile platforms <br/>• Used a wide variety of software to complete the projects including Photoshop, Illustrator and coding such as HTML5, CSS3, JavaScript / jQuery <br/>• Completed all the projects within deadline"
        },
        {
            badgeClass: 'info',
            company: 'Bir Infosys',
            duration: 'Mar 2008 - June 2010',
            badgeIconClass: 'fa fa-bookmark',
            title: 'Jr. Web Developer',
            content: "<b>UX/UI design and development for company's various clients. My job responsibilities include </b> <br/>• Responsible for product UI from scratch and creating prototypes. <br/>• Hand code HTML, CSS , jQuery <br/>• Basic PHP for dynamic page implementation <br/>• Implemented multiple CMS platform websites <br/>• Developed multiple organic jQuery content sliders <br/>• Basic Search Engine Optimization, content writing"
        },
        {
            badgeClass: 'info',
            company: 'Apeejay College of Fine Arts',
            duration: 'Mar 2007 - June 2013',
            badgeIconClass: 'fa fa-graduation-cap',
            title: 'Bachelors in MultiMedia',
            content: ''
        }
    ];

}]);