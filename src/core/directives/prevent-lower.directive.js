(function () {

    'use strict';

    angular.module('app.core')
        .directive('preventTypingLower', directiveFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            link: function(scope, element, attributes) {
                var oldVal = 1;
                element.on('keydown keyup', function(e) {
                    if (e.keyCode !== 46 && e.keyCode !== 8) {
                        if (e.keyCode === 108 || e.keyCode === 109 ||
                            e.keyCode === 110 || e.keyCode === 188 ||
                            e.keyCode === 189 || e.keyCode === 190) {
                            return false;
                        }

                        if (Number(element.val()) >= Number(attributes.min)) {
                            oldVal = Number(element.val());
                        } else {
                            e.preventDefault();
                            element.val(1);
                        }
                    }
                });
            }
        };

        return directive;
    }

})();