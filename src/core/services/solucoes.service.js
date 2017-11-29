(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('solucoesService', serviceFunction);

    serviceFunction.$inject = ['$http', '$location', '$cacheFactory', '$filter', 'exception', 'api'];

    /* @ngInject */
    function serviceFunction($http, $location, $cacheFactory, $filter, exception, api) {
        var service = {
            getSolucoes: getSolucoes,
            getSolucaoBySlug: getSolucaoBySlug,
            clearCache: clearCache
        };

        return service;

        /**
         * Get soluções page.
         * @return {Promise} A promise that returns data of page soluções content if resolved
         */
        function getSolucoes() {
            return $http.get(api, { cache: true })
                .then(getSolucoesSuccess)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getSolucoes')(message);
                    $location.url('/');
                });

            function getSolucoesSuccess(response) {
                var solucoes = response.data.solucoes;
                return solucoes;
            }
        }

        function getSolucaoBySlug(slug) {
            return getSolucoes().then(function(data) {
                var solucoes = data.solucoes;
                return $filter('filter')(solucoes, {slug: slug}, true)[0];
            });
        }

        function clearCache() {
            var cache = $cacheFactory.get('$http');
            cache.remove(api);
        }
    }
})();