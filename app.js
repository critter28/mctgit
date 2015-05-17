var app = angular.module("app", []);

app.controller("NavigationController", ["$scope", "promocheckerService", function($scope, promocheckerService) {

	this.currentpage = "home";
	this.promovalue = false;

	this.setPage = function(target){
		this.currentpage = target;
	};
	this.isPage = function(checkValue){
		return this.currentpage === checkValue;
	};
	this.checkPromo = function () {
		$scope.promo = promocheckerService.checkPromoCode();
	};

}]);
app.directive('pageHeader', function(){	
	return {
		restrict: 'E',
		templateUrl: 'header.tpl.html'
	};

});
app.directive('navigationBar', function(){	
	return {
		restrict: 'E',
		templateUrl: 'navigationbar.tpl.html'
	};
});
app.directive('homeContent', function(){	
	return {
		restrict: 'E',
		templateUrl: 'home.tpl.html'
	};
});
app.directive('footerContent', function(){
	
	return {
		restrict: 'E',
		templateUrl: 'footer.tpl.html'
	};
});
app.directive('latestNewsContent', function(){
	
	return {
		restrict: 'E',
		templateUrl: 'latest-news.tpl.html'
	};
});
app.directive('faqContent', function(){
	
	return {
		restrict: 'E',
		templateUrl: 'faq.tpl.html'
	};
});
app.directive('multimediaContent', function(){	
	return {
		restrict: 'E',
		templateUrl: 'multimedia.tpl.html'
	};
});
app.directive('scheduleContent', function(){
	
	return {
		restrict: 'E',
		templateUrl: 'schedule.tpl.html'
	};
});
app.directive('renttoownContent', function(){
	
	return {
		restrict: 'E',
		templateUrl: 'renttoown.tpl.html'
	};
});
app.directive('creditbuildingContent', function(){
	
	return {
		restrict: 'E',
		templateUrl: 'creditbuilding.tpl.html'
	};
});
app.directive('homePostPromo', function(){
	
	return {
		restrict: 'E',
		templateUrl: 'homepostpromo.tpl.html'
	};
});
app.directive('schedulePostPromo', function(){
	
	return {
		restrict: 'E',
		templateUrl: 'schedulepostpromo.tpl.html'
	};
});