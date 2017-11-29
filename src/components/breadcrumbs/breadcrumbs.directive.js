(function () {

    'use strict';

    angular.module('app.breadcrumbs')
        .directive('tmplBreadcrumbs', directiveFunction);
        // .controller('BreadcrumbsController', ControllerFunction);

    // ----- directiveFunction -----
    directiveFunction.$inject = ['$location', 'solucoesService'];

    /* @ngInject */
    function directiveFunction($location, solucoesService) {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/breadcrumbs/breadcrumbs.html',
            scope: {
                state: '=',
                params: '='
            },
            link: function(scope, element, attrs) {
                scope.$watch('params.solucaoSlug', function(newValue) {
                    if (newValue) {
                        solucoesService.getSolucaoBySlug(newValue)
                            .then(function(data) {
                                if (data) {
                                    scope.solucao = data;
                                } else {
                                    $location.url('/solucoes');
                                }
                            });
                    }
                });
            }
        };

        return directive;
    }
})();
