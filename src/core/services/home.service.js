(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('homeService', serviceFunction);

    serviceFunction.$inject = ['$http', '$location', '$cacheFactory', 'exception', 'api'];

    /* @ngInject */
    function serviceFunction($http, $location, $cacheFactory, exception, api) {
        var service = {
            getHome: getHome,
            clearCache: clearCache
        };

        return service;

        /**
         * Get home page.
         * @return {Promise} A promise that returns data of page home content if resolved
         */
        function getHome() {
            return $http.get(api, { cache: true })
                .then(getHomeSuccess)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getHome')(message);
                    $location.url('/');
                });

            function getHomeSuccess(response) {
                var home = response.data.home;

                // Sort by name
                // accounts = _.sortBy(accounts, 'name');

                return home;
            }
        }

        function clearCache() {
            var cache = $cacheFactory.get('$http');
            cache.remove(api);
        }
    }
})();