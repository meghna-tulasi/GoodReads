(function () {
    angular
        .module('GoodReads')
        .controller('loginController',loginController);

    function  loginController($location, userService) {
        var model = this;


        model.login = login;

        function login (username, password) {

            userService
                .findUserByCredentials(username, password)
                .then(renderLogin, loginError);

            function renderLogin(found) {
                $location.url('/user/' + found._id)


            }

            function loginError() {
                model.message = "Please enter credentials";
            }

        }
    }
}) ();