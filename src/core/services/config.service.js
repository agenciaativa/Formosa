(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('configService', serviceFunction);

    serviceFunction.$inject = ['$http', '$cacheFactory', 'exception', 'api'];

    /* @ngInject */
    function serviceFunction($http, $cacheFactory, exception, api) {
        var service = {
            getConfig: getConfig,
            clearCache: clearCache
        };

        return service;

        /**
         * Get site configuration.
         * @return {Promise} A promise that returns configuration of whole site if resolved
         */
        function getConfig() {
            return $http.get(api, { cache: true })
                .then(getConfigSuccess)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getConfig')(message);
                });

            function getConfigSuccess(response) {
                var config = response.data.config;

                return config;
            }
        }

        function clearCache() {
            var cache = $cacheFactory.get('$http');
            cache.remove(api);
        }
    }
})();