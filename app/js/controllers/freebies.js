
dApp.controller('freebiesCtrl',['$scope','$rootScope','$sce', function($scope, $rootScope,$sce){

    $scope.quotes = [
                        {
                            author: 'Brian Reed',
                            quote: '<b>Everything is designed.</b> Few things are designed well.'
                        },
                        {
                            author: 'Ralph Caplan',
                            quote: '<b>Thinking about design</b> is hard, but not thinking about it can be disastrous.'
                        },
                    ]

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
            title: 'Bachelor in MultiMedia',
            content: ''
        }
    ];

}]);