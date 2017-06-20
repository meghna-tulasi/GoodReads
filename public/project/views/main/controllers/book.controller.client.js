(function () {
    angular
        .module('GoodReads')
        .controller('bookController', bookController);

    function bookController ($routeParams, bookService) {

        var model = this;

        model.id = $routeParams['id'];
        model.bookInfo = bookInfo;
        model.handleResponse = handleResponse;


        function init() {
            bookInfo(model.id);
        }
        init();

        function bookInfo(bookText) {
            bookService
                .bookInfo(bookText)
                .then(handleResponse);
        }

        function handleResponse(response) {
            console.log(response.data);

        }
    }
})();