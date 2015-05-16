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