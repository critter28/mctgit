angular.module("app", ['ngRoute'])
.config(["$routeProvider", function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: "home.tpl.html"
		})
		.when('/latestnews', {
			templateUrl: "latest-news.tpl.html"
		})
		.when('/faq', {
			templateUrl: "faq.tpl.html"
		})
		.when('/multimedia', {
			templateUrl: "multimedia.tpl.html"
		})
		.when('/schedule', {
			templateUrl: "schedule.tpl.html"
		})
		.when('/renttoown', {
			templateUrl: "renttoown.tpl.html"
		})
		.when('/creditbuilding', {
			templateUrl: "creditbuilding.tpl.html"
		})
		.when('/', {
			redirectTo: "/home"
		})
		.otherwise({
			redirectTo: "/home"
		});
}])
.controller("NavigationController", ["$scope", "promocheckerService", "$route", "$location", "$routeParams",
		function($scope, promocheckerService, $route, $location, $routeParams) {

	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;

	this.checkPromo = function () {
		$scope.promo = promocheckerService.checkPromoCode();
	};

}])
.directive('pageHeader', function(){	
	return {
		restrict: 'E',
		templateUrl: 'header.tpl.html'
	};

})
.directive('navigationBar', function(){	
	return {
		restrict: 'E',
		templateUrl: 'navigationbar.tpl.html'
	};
})
.directive('footerContent', function(){
	
	return {
		restrict: 'E',
		templateUrl: 'footer.tpl.html'
	};
});