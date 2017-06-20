(function () {
    angular
        .module('GoodReads')
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main/templates/main.view.client.html',
                controller: 'mainController',
                controllerAs: 'model'
            })
            .when('/operation', {
                templateUrl: 'views/main/templates/main.view.client.html',
                controller: 'mainController',
                controllerAs: 'model'
            })
            .when('/search/:text', {
                templateUrl: 'views/main/templates/book-results.view.client.html',
                controller: 'searchController',
                controllerAs: 'model'
            })

            .when('/login',{
                templateUrl: 'views/main/templates/login.view.client.html',
                controller: 'loginController',
                controllerAs: 'model'
            })
            .when('/register',{
                templateUrl: 'views/main/templates/register.view.client.html',
                controller: 'registerController',
                controllerAs: 'model'
            })


    }
})();