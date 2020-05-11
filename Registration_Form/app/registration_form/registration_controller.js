(function () {
    'use strict';
    angular.module('picturesQue')
        .controller('registerController', ['$scope', '$state', 'registrationService', function ($scope, $state, registrationService) {
            $scope.genderTypes = [{ 'type': 'Male', 'isSelectedGenderType': false },
            { 'type': 'Female', 'isSelectedGenderType': false },
            { 'type': 'Other', 'isSelectedGenderType': false }];
            $scope.picturesQueRegistration = {};
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
            $scope.showCompanyLogo = "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png";
            $scope.stateContainedCountry = 191;
            $scope.zero = 0;
            $scope.countryCount = 0;




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
                    if (key === index) {
                        value.isSelectedGenderType = true;
                        return;
                    }
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
                        $scope.isSelectedCountryChanged = true;
                        if ($scope.selectedCountryState.length >= 1)
                            $scope.isShowStateField = false;
                    }
                    else {
                        $scope.countryCount++;
                    }
                });
                if ($scope.countryCount === $scope.stateContainedCountry) {
                    $scope.isShowStateField = true;
                    $scope.selectedCountryState = "";
                }
                $scope.countryCount = $scope.zero;
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
            /* Get company logo */
            $scope.getCompanyLogo = function (event) {
                $("#companyLogo").trigger("click");
            }

            $(document).ready(function () {
                $('input[type="file"]').change(function (e) {
                    var fileName = e.target.files[0].name;
                    var tmppath = URL.createObjectURL(event.target.files[0]);
                    $("#logoImage").fadeIn("fast").attr('src', URL.createObjectURL(event.target.files[0]));
                    $("#logoImage").html(tmppath);
                    $scope.showCompanyLogo = tmppath;
                    $scope.picturesQueDetails.companyLogo = tmppath;

                });
            });

            $scope.init();
        }]);
})();