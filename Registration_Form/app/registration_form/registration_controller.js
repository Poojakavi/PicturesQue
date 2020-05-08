(function () {
    'use strict';
    angular.module('picturesQue')
        .controller('registerController', ['$scope', '$state', 'registrationService', function ($scope, $state, registrationService) {
            $scope.genderTypes = [{ 'type': 'Male', 'isSelectedGenderType': false },
            { 'type': 'Female', 'isSelectedGenderType': false },
            { 'type': 'Other', 'isSelectedGenderType': false }];
            $scope.picturesQueDetails = {};
            $scope.numberValue = "";
            $scope.countryDetails = {};
            $scope.stateDetails = {};
            $scope.isShowStateField = true;
            $scope.isNumberEntered = false;
            $scope.callingCode = "";
            $scope.code = "+";
            $scope.selfIndex = {};
            $scope.selfIndex.selectedIndex = 0;
            $scope.selectedCountryState = {};
            $scope.optTypes = [1, 2, 3, 4, 5];
            $scope.picturesQueDetails.otp = {};
            $scope.numberDetails = {};



            $scope.init = function () {
                countryDetails();
                respectiveStateDetails();
            };

            /* Get method for home team */
            function countryDetails() {
                var data = registrationService.getCountryDetails();
                data.then(function (response) {
                    $scope.countryDetails = response.data;

                }, function (reason) {
                    return reason;
                });
            }

            /* Get method for home team */
            function respectiveStateDetails() {
                var data = registrationService.getStateDetails();
                data.then(function (response) {
                    $scope.stateDetails = response.data;
                }, function (reason) {
                    return reason;
                });
            }

            /* Select the Gender type */
            $scope.getGenderType = function (index) {
                angular.forEach($scope.genderTypes, function (value, key) {
                    if (key === index)
                        value.isSelectedGenderType = true;
                    else
                        value.isSelectedGenderType = false;
                });
            }

            /*Store date in Local Storage */
            $scope.verifyDetails = function () {
                localStorage.setItem("picturesQue_data", JSON.stringify($scope.picturesQueDetails));
            }

            /*Select Country Details */
            $scope.selectState = function (index, country) {
                $scope.selectedCountryFlag = country.flag;
                $scope.callingCode = country.callingCodes[0];   
                angular.forEach($scope.stateDetails.countries, function (value, key) {
                    if (country.name === value.country) {
                        $scope.selectedCountryState = value.states;
                        if ($scope.selectedCountryState.length >= 1)
                            $scope.isShowStateField = false;
                        else
                            $scope.isShowStateField = true;
                        $scope.picturesQueRegistration.stateName = "";
                    }
                });
            }

            /* Convert given value into valid ticket count */
            $scope.validNumber = function (element) {
                var pattern = new RegExp(/^[0-9]*$/);
                $scope.numberDetails = elementpicturesQueDetails.otp;
                if (pattern.test(element.oneTimePassword))
                    $scope.numberValue = element;
                else if (number === undefined)
                    element.oneTimePassword = "";
                else
                    element.oneTimePassword = $scope.numberValue;
            }
            /*Change border color */
            $scope.changeBorder = function () {
                $scope.isNumberEntered = true;
            }
            /* Remove border effect */
            $scope.removeBorder = function () {
                $scope.isNumberEntered = false;
            }

            /*Show Company detials tab */
            $scope.companyDetialsTab = function () {
                $scope.selfIndex.selectedIndex = 1;
            };

            /*Show personal detials tab */
            $scope.personalDetailsTab = function () {
                $scope.selfIndex.selectedIndex = 0;
            };

            /*Show personal detials tab */
            $scope.otpTab = function () {
                $scope.selfIndex.selectedIndex = 2;
            };

            /* Get Success template using state */
            $scope.getSuccessStateTemplate = function (templateState) {
                $state.go(templateState);
            }
            $scope.init();
        }]);
})();