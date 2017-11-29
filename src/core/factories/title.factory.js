(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('Title', factoryFunction);

    // ----- factoryFunction -----
    factoryFunction.$inject = ['$window'];

    /* @ngInject */
    function factoryFunction($window) {
        return {
            setTitle: setTitle
        };

        function setTitle(title) {
            $window.document.title = title + ' - Panificadora Formosa';
        }
    }
})();