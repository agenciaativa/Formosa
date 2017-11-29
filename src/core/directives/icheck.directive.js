(function () {

    'use strict';

    angular.module('app.core')
        .directive('icheck', directiveFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = ['$timeout', '$parse'];

    /* @ngInject */
    function directiveFunction($timeout) {

        var directive = {
            require: 'ngModel',
            link: function($scope, element, $attrs, ngModel) {
                return $timeout(function() {
                    var value;
                    value = $attrs['value'];

                    $scope.$watch($attrs['ngModel'], function(newValue){
                        jQuery(element).iCheck('update');
                    });

                    return jQuery(element).iCheck({
                        checkboxClass: 'icheckbox_square-yellow',
                        radioClass: 'iradio_square-yellow'

                    }).on('ifChanged', function(event) {
                        if (jQuery(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
                            $scope.$apply(function() {
                                return ngModel.$setViewValue(event.target.checked);
                            });
                        }
                        if (jQuery(element).attr('type') === 'radio' && $attrs['ngModel']) {
                            return $scope.$apply(function() {
                                return ngModel.$setViewValue(value);
                            });
                        }
                    });
                });
            }
        };

        return directive;
    }

})();