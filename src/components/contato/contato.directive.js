(function () {
    'use strict';

    angular
        .module('app.contato')
        .directive('tmplContato', directiveFunction)
        .controller('ContatoController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/contato/contato.html',
            scope: {
            },
            controller: 'ContatoController',
            controllerAs: 'vm'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['$preloaded', 'Title', 'logger', 'NgMap'];

    /* @ngInject */
    function ControllerFunction($preloaded, Title, logger, NgMap) {
        var vm = this;
        var page = 'Contato';
        vm.config = $preloaded;

        vm.mapStyle = [
            {
                'featureType': 'all',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'color': '#75a8d3'
                    },
                    {
                        'lightness': 40
                    }
                ]
            },
            {
                'featureType': 'all',
                'elementType': 'labels.text.stroke',
                'stylers': [
                    {
                        'color': '#0f4063'
                    },
                    {
                        'saturation': '20'
                    },
                    {
                        'lightness': '-15'
                    }
                ]
            },
            {
                'featureType': 'administrative',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'color': '#233853'
                    }
                ]
            },
            {
                'featureType': 'administrative',
                'elementType': 'geometry.stroke',
                'stylers': [
                    {
                        'color': '#144b53'
                    },
                    {
                        'lightness': 14
                    },
                    {
                        'weight': 1.4
                    }
                ]
            },
            {
                'featureType': 'landscape',
                'elementType': 'all',
                'stylers': [
                    {
                        'color': '#12517b'
                    }
                ]
            },
            {
                'featureType': 'poi',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#126598'
                    },
                    {
                        'lightness': -10
                    }
                ]
            },
            {
                'featureType': 'poi',
                'elementType': 'labels.icon',
                'stylers': [
                    {
                        'invert_lightness': true
                    },
                    {
                        'hue': '#0c3553'
                    },
                    {
                        'saturation': 28
                    },
                    {
                        'lightness': 10
                    }
                ]
            },
            {
                'featureType': 'road.highway',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'color': '#0c3553'
                    }
                ]
            },
            {
                'featureType': 'road.highway',
                'elementType': 'geometry.stroke',
                'stylers': [
                    {
                        'color': '#0c3553'
                    }
                ]
            },
            {
                'featureType': 'road.arterial',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'color': '#0c3553'
                    }
                ]
            },
            {
                'featureType': 'road.arterial',
                'elementType': 'geometry.stroke',
                'stylers': [
                    {
                        'color': '#0c3553'
                    }
                ]
            },
            {
                'featureType': 'road.local',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#0c3553'
                    }
                ]
            },
            {
                'featureType': 'transit',
                'elementType': 'all',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'featureType': 'water',
                'elementType': 'all',
                'stylers': [
                    {
                        'color': '#233853'
                    }
                ]
            }
        ];

        vm.markerStyle = {
            path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
            fillColor: '#418bc4',
            fillOpacity: 1,
            strokeColor: '#83b0d7',
            strokeWeight: 2,
            scale: 1,
        };

        activate();

        function activate() {
            Title.setTitle(page);
            logger.log('Activated ' + page + ' View');

            NgMap.getMap({id: 'siteMap'}).then(function(map) {
                vm.map = map;
                map.style = vm.mapStyle;
            });
        }

    }

})();
