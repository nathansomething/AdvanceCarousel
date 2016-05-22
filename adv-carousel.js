var app = angular.module('advCarousel', []).run(function() {

});

app.controller("CarouselCtrl", function($scope) {

    $scope.sections = [{text: "1"}, {text: "2"}, {text: "3"}, {text: "4"}, {text: "5"}];
    $scope.position = 0;
    $scope.heading = "hi";

    $scope.changePosition = function(delta) {
        if (($scope.position + delta) < 0) {
            return;
        }
        else if (($scope.position + delta) > ($scope.sections.length - 3)) {
            return
        }
        else {
            $scope.position += delta;
        }
    };
});

app.controller('advCard', function() {

});

app.directive('advCard', function() {
    return {
        restrict: 'E',
        controller: 'CardCtrl',
        templateUrl: 'adv-card.html'
    };
});

app.directive('advCarousel', function() {
    return {
        require: '^^advCard',
        restrict: 'E',
        transclude: true,
        controller: 'CarouselCtrl',
        templateUrl: 'adv-carousel.html'
    };
});

//
// app.controller("CardCtrl", function($scope) {
//     $scope.title = "Heading";
// });
//
// app.directive('adv-card', function() {
//     return {
//         restrict: 'E',
//         controller: 'CardCtrl',
//         templateUrl: 'card.html'
//     }
// })
