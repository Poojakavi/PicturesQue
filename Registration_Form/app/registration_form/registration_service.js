(function () {
	'use strict';

	angular
		.module('picturesQue')
		.service('registrationService', ['$q', '$http', function ($q, $http) {

			/* Get call for Home team details in json */
			this.getCountryDetails = function () {
				var deferred = $q.defer();
				$http({
					method: 'GET',
					url: "https://restcountries.eu/rest/v2/all"
				}).then(function (response) {
					deferred.resolve(response);
				}, function () {
					defer.reject('ERROR');
				});
				return deferred.promise;
			}


            this.getStateDetails = function(){
                var deferred = $q.defer();
                $http({
					method: 'GET',
					url: "https://gist.githubusercontent.com/ebaranov/41bf38fdb1a2cb19a781/raw/fb097a60427717b262d5058633590749f366bd80/gistfile1.json"
				}).then(function (response) {
					deferred.resolve(response);
				}, function () {
					defer.reject('ERROR');
				});
				return deferred.promise;                
            }
		}]);
})();