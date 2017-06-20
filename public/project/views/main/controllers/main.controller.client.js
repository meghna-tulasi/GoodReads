(function () {
    angular
        .module('GoodReads')
        .controller('mainController', mainController);

    function mainController ($location, mainService) {

        var model = this;
        model.searchBook = searchBook;



        function searchBook(searchText) {
            $location.url('/search/' + searchText);
        }

    }
})();
