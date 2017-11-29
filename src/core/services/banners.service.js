(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('bannersService', serviceFunction);

    serviceFunction.$inject = ['$http', '$cacheFactory', 'exception', 'api'];

    /* @ngInject */
    function serviceFunction($http, $cacheFactory, exception, api) {
        var service = {
            getBanners: getBanners,
            clearCache: clearCache
        };

        return service;

        /**
         * Get site banners.
         * @return {Promise} A promise that returns banners of whole site if resolved
         */
        function getBanners() {
            return $http.get(api, { cache: true })
                .then(getBannersSuccess)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getBanners')(message);
                });

            function getBannersSuccess(response) {
                var banners = response.data.banners;
                return banners;
            }
        }

        function clearCache() {
            var cache = $cacheFactory.get('$http');
            cache.remove(api);
        }
    }
})();