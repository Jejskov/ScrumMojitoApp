describe('ProfileCtrl', function() {
	var $scope, $controller;

	beforeEach(module('starter'));

	beforeEach(inject(function(_$rootScope_, _$controller_){

		$scope = _$rootScope_.$new();
		$controller = _$controller_;

		ctrl = $controller('ProfileCtrl', {$scope: $scope});
	}));

	it('user should have all information', function() {
		$scope.setProfile({age: 21,
							email: "arne.vlaeminck@student.odisee.be",
							firstname: "Arne",
							id: 10210995798960326,
							lastname: "Vlaeminck",
							location: 1,
							prefAge: 18,
							prefDistance: 10,
							prefFemale: true,
							prefLocation: 1,
							prefMale: false,
							prefTrans: false
						});

		expect($scope.user).toEqual({name: "Arne Vlaeminck",email: "arne.vlaeminck@student.odisee.be",school: "Odisee, Gent",about: "fun guy, javascript is life"});
		expect($scope.gender).toEqual({ male: false, female: true, trans: false });
		expect($scope.ageSlider).toEqual({value: 18,min: 16,max: 99});
		expect($scope.distanceSlider).toEqual({value: 10,min: 0,max: 40});
		expect($scope.locations).toEqual([{id: 1, value: "Gent"}, {id: 2, value: "Kortrijk"}, {id: 3, value: "Leuven"}, {id: 4, value: "Brussel"}]);
	});
	it('updating of user information', function() {
		$scope.gender = { male: false, female: true, trans: false };
		// $scope.user.email = "javascript4life@web.com";
	    // $scope.ageSlider.value = 20;
	    // $scope.distanceSlider.value = 2;
		$scope.saveProfile();
		expect($scope.gender).toEqual({ male: false, female: true, trans: false });
		// expect($scope.user.email).toEqual("javascript4life@web.com");
		// expect($scope.ageSlider.value).toEqual(20);
		// expect($scope.distanceSlider.value).toEqual(2);
	});
	it('change location id', function() {
		$scope.changed(3);
		expect($scope.locationId).toEqual(3);
	});


});
