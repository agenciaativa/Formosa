(function () {

    'use strict';

    angular.module('app.clientes')
        .directive('tmplClientes', directiveFunction)
        .controller('ClientesController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/clientes/clientes.html',
            scope: {
            },
            controller: 'ClientesController',
            controllerAs: 'vm'
        };

        return directive;
    }


    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['Title', 'logger', 'clientesService'];

    /* @ngInject */
    function ControllerFunction(Title, logger, clientesService) {
        var vm = this;
        var page = 'Clientes';
        vm.clientes = null;

        activate();

        function activate() {
            Title.setTitle(page);
            return getClientes().then(function() {
                logger.log('Activated ' + page + ' View');
            });
        }

        function getClientes() {
            return clientesService.getClientes().then(function(data) {
                vm.clientes = data;
                return vm.clientes;
            });
        }
    }

})();
