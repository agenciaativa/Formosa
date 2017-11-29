(function () {

    'use strict';

    angular.module('app.core')
        .directive('fone', directiveFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = ['$filter'];

    /* @ngInject */
    function directiveFunction($filter) {

        var directive = {
            restrict: 'A',
            template: '{{ fone }}',
            scope: {
                telefone: '='
            },
            link: function(scope, elem, attr) {
                scope.$watch('telefone', function(value) {
                    scope.fone = $filter('phone')(value, 'phone');
                });
            }
        };

        return directive;
    }

})();
