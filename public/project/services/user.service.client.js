(function(){
    angular
        .module('GoodReads')
        .factory('userService', userService);

    function userService($http) {

        var api = {
            createUser: createUser,
            findUserById: findUserById,
            findUserByUsername: findUserByUsername,
            findUserByCredentials: findUserByCredentials,
            deleteUser: deleteUser,
            updateUser: updateUser,
            login:login,
            logout: logout,
            loggedin: loggedin,
            register: register,
            unregister:unregister,
            findAllFollowing: findAllFollowing,
            findAllFollowers: findAllFollowers,
            removeUserFromFollowers: removeUserFromFollowers,
            removeUserFromFollowing: removeUserFromFollowing

        };
        return api;


        function createUser(user) {
            var url = "/api/project/user";
            return $http.post(url, user)
                .then(function (response) {
                    return response.data;
                });
        }

        function findUserByUsername(username) {
            var url = "/api/project/user/?username="+username;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findUserById(userId) {
            var url = "/api/project/user/"+userId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findUserByCredentials(username, password) {
            var url = "/api/project/user/?username="+username+"&password="+password;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });

        }


        function updateUser(userId, newUser) {
            var url = "/api/project/user/"+userId;
            return $http.put(url, newUser)
                .then(function (response) {
                    return response.data;
                });

        }

        function deleteUser(userId) {
            var url = "/api/project/user/"+userId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findAllFollowers(userId) {
            var url = "/api/project/user/followers/"+ userId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
        }

        function findAllFollowing(userId) {
            var url = "/api/project/user/following/"+ userId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
        }

        function removeUserFromFollowers(userId,followerId){
            var url = "/api/project/user/followers/"+ userId +"/"+followerId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                })
        }
        function removeUserFromFollowing(userId,followingId){
            var url = "/api/project/user/following/"+ userId +"/"+followingId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                })
        }

        function unregister() {
            var url = "/api/project/unregister";
            return $http.post(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function loggedin() {
            var url = "/api/project/loggedin";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function logout() {
            var url = "/api/project/logout";
            return $http.post(url)
                .then(function (response) {
                    return response.data;
                });
        }



        function login(username, password) {
            var url = "/api/project/login";
            var credentials = {
                username: username,
                password: password
            };
            return $http.post(url, credentials)
                .then(function (response) {
                    return response.data;
                });
        }

        function register(user) {
            var url = "/api/project/register";
            return $http.post(url, user)
                .then(function (response) {
                    return response.data;
                });
        }


    }
})();