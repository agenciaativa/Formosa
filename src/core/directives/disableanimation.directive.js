(function () {

    'use strict';

    angular.module('app.core')
        .directive('disableAnimation', directiveFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = ['$animate'];

    /* @ngInject */
    function directiveFunction($animate) {

        var directive = {
            restrict: 'A',
            link: function(scope, element) {
                $animate.enabled(false, element);
            }
        };

        return directive;
    }

})();