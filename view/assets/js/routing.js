/**
 * Created by JoeriSmits on 15/05/2015.
 */

"use strict";
var faApp = angular.module("faApp", ['ngRoute']).
    config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when("/home", {
                    templateUrl: "templates/home.html"
                }).
                when("/aboutUs", {
                    templateUrl: "templates/about.html"
                }).
                when("/404", {
                    templateUrl: "templates/404.html"
                }).
                when("/training", {
                    templateUrl: "templates/training.html"
                }).
                when("/subscribe", {
                    templateUrl: "templates/subscribe.html"
                }).
                when("/subscribeForm", {
                    templateUrl: "templates/subscribeForm.html"
                }).
                when("/activeStudents", {
                    templateUrl: "templates/activeStudents.html"
                }).
                when("/graduatedStudents", {
                    templateUrl: "templates/graduatedStudents.html"
                }).
                when("/whatDoStudentsSay", {
                    templateUrl: "templates/whatDoStudentsSay.html"
                }).
                when("/contact", {
                    templateUrl: "templates/contact.html"
                }).
                otherwise({
                    redirectTo: '/404'
                });
        }]);

/**
 * Initialize the Application and LayerSlider
 */
faApp.directive('layerSlider', function () {
    return {
        link: function (scope, element, attrs) {
            App.init();
            LayerSlider.initLayerSlider();
        }
    }
});