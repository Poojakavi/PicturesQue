(function () {
    'use strict';
    angular.module('picturesQue')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/register');
            $stateProvider
                .state('registration', {
                    url: '/register',
                    templateUrl: "app/registration_form/registration_form.html",
                    controller: "registerController"
                });
            $stateProvider
                .state('registration_success', {
                    url: '/register_success',
                    templateUrl: "app/success_page/registration_success.html",
                    controller: "successController"
                });

        }])
})();