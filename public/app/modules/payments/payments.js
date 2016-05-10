(function () {
    'use strict';
    angular.module('budgeter.payments').directive('payments', PaymentsDef);
    PaymentsDef.$inject = [];
    function PaymentsDef() {
        var directive = {};
        directive.restrict = 'A';
        directive.templateUrl = 'payments.html';
        return directive;
    }
})();