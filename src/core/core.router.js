(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(configFunction);

    configFunction.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function configFunction($locationProvider, $stateProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: '<div tmpl-home id="home"></div>'
            })
            .state('solucoes-detalhe', {
                url: '/solucoes/:solucaoSlug',
                template: '<div tmpl-solucao solucao="vm.solucao"></div>',
                resolve: {
                    solucao: ['solucoesService', '$stateParams', function(solucoesService, $stateParams) {
                        var slug = $stateParams.solucaoSlug;
                        return solucoesService.getSolucaoBySlug(slug)
                            .then(function(data) {
                                return data;
                            });
                    }]
                },
                controller: ['solucao', function(solucao) {
                    this.solucao = solucao;
                }],
                controllerAs: 'vm'
            })
            .state('contato', {
                url: '/contato',
                template: '<div tmpl-contato></div>'
            });
    }
})();
