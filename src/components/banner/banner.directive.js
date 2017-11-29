(function () {
    'use strict';

    angular
        .module('app.banner')
        .directive('tmplBanner', directiveFunction);

    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/banner/banner.html',
            scope: {
                banners: '='
            }
        };

        return directive;
    }

})();
