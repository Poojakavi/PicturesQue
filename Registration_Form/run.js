(function () {
    'use strict';

    angular
        .module('picturesQue')
        .run(['$rootScope', function ($rootScope) {
            $rootScope.constant = {
                en: {
                    'personalDetails': 'Personal Details',
                    'companyDetails': 'Company Details',
                    'emailVerification': 'Email Verification',
                    'addPersonalDetails': 'Add your personal details',
                    'companyDiscription': 'We are making photographs to understand what our lives mean to us',
                    'fullName': 'Full Name',
                    'gender': 'Gender',
                    'male': 'Male',
                    'female': 'Female',
                    'other': 'Other',
                    'country': 'Country',
                    'state': 'State',
                    'phone': 'Phone',
                    'next': 'Next',
                    'accountMessage': 'Already have an account?',
                    'logIn': 'Log in',
                    'next': 'Next',
                    'addCompanyDetails': 'Add your company details',
                    'companyLogo': 'Upload your company logo',
                    'companyName': 'Company Name',
                    'emailId': 'Email Id',
                    'jobTitle': 'Job Title',
                    'yearsOfExperience': 'Years of Experience',
                    'accept': 'I accept the ',
                    'termsAndCondition': ' Terms and Conditions',
                    'space': '&nbsp;',
                    'back': 'Back',
                    'send': 'Send OTP',
                    'enter': 'Enter your OTP',
                    'securityMessage': 'For your security, we need to verify your identity. We send a 5-digit',
                    'enterCode': 'Enter your code',
                    'verify': 'Verify',
                    'otpErrorMessage': "Didn't receive the email? Check your spam filter for an email",
                    'from': 'from',
                    'domain': 'name@domain.com'
                }

            }
        }]);
})();