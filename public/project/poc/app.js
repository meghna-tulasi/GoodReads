(function () {
    angular
        .module('pocApp', [])
        .controller('pocController', pocController);
    
    function pocController($http) {
        var model = this;
        model.searchBook = searchBook;
        model.searchDetails = searchDetails;
        
        function searchDetails(id) {
            var url="https://www.googleapis.com/books/v1/volumes/" + id +"?key=AIzaSyDbHsbZ4QXiO_LAfSZ1BGmt8UeEgawQqSo";
            $http.get(url)
                .then(function (response) {
                    model.book = response.data;
                });
        }
        
        function searchBook(title) {
            var url="https://www.googleapis.com/books/v1/volumes/?q=" + title + "&key=AIzaSyDbHsbZ4QXiO_LAfSZ1BGmt8UeEgawQqSo";
            $http.get(url)
                .then(function (response) {
                    model.books = response.data.items;
                });
        }
    }
})();

