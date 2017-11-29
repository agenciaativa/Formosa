(function() {

    'use strict';

    angular.module('app.solucaodetalhe')
        .directive('tmplSolucao', directiveFunction)
        .controller('SolucoesController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/solucoes-detalhes/solucao-detalhe.html',
            scope: {
                solucao: '='
            },
            controller: 'SolucoesController',
            controllerAs: 'vm'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['Title', 'logger'];

    /* @ngInject */
    function ControllerFunction(Title, logger) {
        var vm = this;
        var page = 'Soluções';

        activate();

        function activate() {
            Title.setTitle(page);
            logger.log('Activated ' + page + ' View');
        }
    }

})();