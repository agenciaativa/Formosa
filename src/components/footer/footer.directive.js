(function () {

    'use strict';

    angular.module('app.footer')
        .directive('tmplFooter', directiveFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/footer/footer.html',
            scope: {
                config: "="
            }
        };

        return directive;
    }

})();
