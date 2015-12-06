(function() {
  
  "use strict";
  
  angular
    .module("app")
    .config(function($routeProvider, $locationProvider) {


      //$locationProvider.html5Mode(true);

      $routeProvider
        .when('/', {
          templateUrl: 'views/list.html',
         // controller: 'MainController',
          //controllerAs: 'main',
        })
        .when('/add', {
          templateUrl: 'views/add.html',
        //  controller: 'MainController',
        //  controllerAs: 'main',
        })
        .when('/edit/:id', {
          templateUrl: 'views/edit.html',
          controller: 'EditController',
          controllerAs: 'main'
        })
        .when('/details/:title', {
          templateUrl: 'views/details.html',
          controller: 'DetailsContrller',
          controllerAs: 'details',
        });

    });
})();