function teamCtrl($scope, $http){
	$http.get('data/team.json').success(function(data){
		$scope.teamMembers = data;
	});
}
