(function () {

    'use strict';

    angular.module('app.core')
        .directive('preloaded', directiveFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = ['$preloaded'];

    /* @ngInject */
    function directiveFunction($preloaded) {

        var directive = {
            restrict: 'E',
            scope: {
                config: '='
            },
            link: function (scope, el, attrs) {
                scope.$watch('config', function(value) {
                    var data;

                    data = JSON.parse(value);

                    if (attrs.hasOwnProperty('name')) {
                        $preloaded[attrs.name] = data;
                    } else {
                        angular.extend($preloaded, data);
                    }
                }, true);
            }
        };

        return directive;
    }

})();