(function () {
    angular
        .module('GoodReads')
        .controller('userSearchController', userSearchController);

    function userSearchController(currentUser,$location,$routeParams,userService) {

        var model = this;
        model.userId = currentUser._id;
        model.user = currentUser;

        model.searchUser = searchUser;
        model.follow = follow;
        model.unfollow = unfollow;

        
        function searchUser(username) {
            if (username === null || username ==='' || typeof username ==='undefined'){
                nh_userService.findAllUsers()
                    .then(function (users) {
                        model.users = users;
                        model.users = userList(model.users);
                    })
            }
            else{
                userService.
                findUserByUsername(username)
                    .then(function (user) {
                        model.users = []
                        model.users.push(user);
                        model.users = userList(model.users);
                    })
            }
        }

        function isInArray(value, array) {
            return array.indexOf(value) > -1;
        }

        function userList(users){
            var preparedUsers = []
            for (var u in users){
                var renderedUser = users[u];
                if(isInArray(renderedUser._id,model.user.following)){
                    renderedUser.unfollow = true;
                }
                else{
                    renderedUser.unfollow = false;
                }

                if(renderedUser.username === model.user.username){
                    renderedUser.displayFollowOptions = false;
                }
                else{
                    renderedUser.displayFollowOptions = true;
                }
                preparedUsers.push(renderedUser);
            }
            return preparedUsers;
        }

        function updateUser(userId,user) {
            userService
                .updateUser(userId,user)
                .then(function () {
                    model.message = "Profile has been updated";
                },function () {
                    model.message = "Error while updating profile";
                });
        }

        function follow(tobeFollowedUser){
            tobeFollowedUser.followers.push(model.userId);
            model.user.following.push(tobeFollowedUser._id);
                userService
                .updateUser(tobeFollowedUser._id,tobeFollowedUser)
                .then(function () {
                        userService.updateUser(model.userId,model.user)
                        .then(function () {
                            searchUser(model.searchText);
                        })
                })
        }

        function unfollow(tobeUnFollowedUser) {
            var index = tobeUnFollowedUser.followers.indexOf(model.userId);
            tobeUnFollowedUser.followers.splice(index,1);
            index = model.user.following.indexOf(tobeUnFollowedUser._id);
            model.user.following.splice(index,1);
                userService
                .updateUser(tobeUnFollowedUser._id,tobeUnFollowedUser)
                .then(function () {
                        userService.updateUser(model.userId,model.user)
                        .then(function () {
                            searchUser(model.searchText);
                        })
                })


        }


        function renderUser (user) {
            model.user = user;
        }

        function userError(error) {
            model.error = "User not found";
        }

        function deleteUser(userId) {
            nh_userService.deleteUser(userId)
                .then(logout(),
                    function () {
                        model.message = "User not deleted";
                    })
        }





    }
})()