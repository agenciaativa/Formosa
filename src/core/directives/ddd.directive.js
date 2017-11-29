(function () {

    'use strict';

    angular.module('app.core')
        .directive('ddd', directiveFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = ['$filter'];

    /* @ngInject */
    function directiveFunction($filter) {

        var directive = {
            restrict: 'A',
            template: '{{ ddd }}',
            scope: {
                telefone: '='
            },
            link: function(scope, elem, attr) {
                scope.$watch('telefone', function(value) {
                    scope.ddd = $filter('phone')(value, 'ddd2');
                });
            }
        };

        return directive;
    }

})();
