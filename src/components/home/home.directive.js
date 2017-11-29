(function () {

    'use strict';

    angular.module('app.home')
        .directive('tmplHome', directiveFunction)
        .controller('HomeController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/home/home.html',
            scope: {
            },
            controller: 'HomeController',
            controllerAs: 'vm'
        };

        return directive;
    }


    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['Title', 'logger', 'homeService'];

    /* @ngInject */
    function ControllerFunction(Title, logger, homeService) {
        var vm = this;
        var page = 'Home';
        vm.home = null;

        activate();

        function activate() {
            Title.setTitle(page);
            return getHome().then(function() {
                logger.log('Activated ' + page + ' View');
            });
        }

        function getHome() {
            return homeService.getHome().then(function(data) {
                vm.home = data;
                return vm.home;
            });
        }
    }

})();
