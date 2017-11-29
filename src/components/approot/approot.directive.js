(function () {

    'use strict';

    angular.module('app.approot')
        .directive('tmplApproot', directiveFunction)
        .controller('AppRootController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/approot/approot.html',
            scope: {
            },
            controller: 'AppRootController',
            controllerAs: 'vm'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['$state', '$stateParams', 'logger', 'configService'];

    /* @ngInject */
    function ControllerFunction($state, $stateParams, logger, configService) {
        var vm = this;
        vm.config = null;
        vm.preloaded = null;
        vm.state = $state;
        vm.stateParams = $stateParams;

        activate();

        function activate() {
            return getConfig().then(function() {
                vm.preloaded = JSON.stringify(vm.config);
                logger.log('Configuration loaded sucessfully');
            });
        }

        function getConfig() {
            return configService.getConfig().then(function(data) {
                vm.config = data;
                return vm.config;
            });
        }
    }

})();
