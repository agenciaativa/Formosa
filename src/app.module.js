(function() {
    'use strict';

    angular.module('app', [
        // Common (everybody has access to these)
        'app.core',

        // Features (listed alphabetically)
        'app.approot',
        'app.banner',
        'app.breadcrumbs',
        'app.clientes',
        'app.contato',
        'app.footer',
        'app.home',
        'app.solucaodetalhe',
        'app.topnav'
    ]);
})();
