angular.module('quoteBook')
    .controller('mainController', function($scope, dataService) {
        $scope.quotes = dataService.getQuotes();
        $scope.delete = function(text) {
            dataService.removeData(text);
        };

        $scope.addQuote = function() {
            var quote = {
                text: $scope.newQuoteText,
                author: $scope.newQuoteAuthor
            };
            if (dataService.addData(quote)) {
                $scope.newQuoteText = '';
                $scope.newQuoteAuthor = '';
            }
        }
    });
