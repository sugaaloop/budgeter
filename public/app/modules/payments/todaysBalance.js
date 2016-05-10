(function () {
    'use strict';
    angular.module('budgeter.payments').directive('todaysBalance', TodaysBalanceDef);
    TodaysBalanceDef.$inject = [];
    function TodaysBalanceDef() {
        var directive = {};
        directive.restrict = 'A';
        directive.templateUrl = 'todaysBalance.html';
        return directive;
    }
})();