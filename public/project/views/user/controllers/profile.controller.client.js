(function () {
    angular
        .module('GoodReads')
        .controller('profileController', profileController);

    function  profileController($location, $routeParams, userService) {
        var model = this;

        model.deleteUser = deleteUser;
        model.updateUser = updateUser;

        model.userId = $routeParams['userId'];

        function init() {

            userService
                .findUserById(model.userId)
                .then(renderUser, userError);

            function renderUser(user){
                model.user = user;
            }

            function userError(error) {
                model.error = "User Not Found";
            }
        }

        init();

        function deleteUser(userId) {
            userService
                .deleteUser(userId)
                .then(function () {
                    $location.url('/login');
                }, function () {
                    model.error = "Unregistration failed!"
                });
        }

        function updateUser(newUser) {
            if(newUser.username === null || newUser.username === '' || typeof newUser.username === 'undefined') {
                model.error = 'username is required';
                model.message = "";
                return;
            }


            userService
                .updateUser(model.userId, newUser)
                .then(function (user) {
                    if (user != null) {

                        model.message = "User has been updated successfully"
                        model.error="";
                    }
                    else {
                        model.error = "Unable to update user";
                    }
                });
        }

    }
}) ();