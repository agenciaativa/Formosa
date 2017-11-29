(function () {
    'use strict';

    angular
        .module('app.topnav')
        .directive('tmplTopnav', directiveFunction)
        .controller('TopNavController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/topnav/topnav.html',
            scope: {
                config: '='
            },
            controller: 'TopNavController',
            controllerAs: 'vm'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['$state', 'bannersService'];

    /* @ngInject */
    function ControllerFunction($state, bannersService) {
        var vm = this;
        vm.state = $state;
        vm.banners = null;

        activate();

        function activate() {
            return getBanners();
        }

        function getBanners() {
            return bannersService.getBanners().then(function(data) {
                vm.banners = data;
                return vm.banners;
            });
        }
    }

})();
