(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('Scroll', factoryFunction);

    // ----- factoryFunction -----
    factoryFunction.$inject = ['$location', '$anchorScroll'];

    /* @ngInject */
    function factoryFunction($location, $anchorScroll) {
        return {
            to: to
        };

        function to(id) {
            $location.hash(id);
            $anchorScroll();
        }
    }
})();