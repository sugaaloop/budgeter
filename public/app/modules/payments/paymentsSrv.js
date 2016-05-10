(function () {
    'use strict';
    angular.module('budgeter.payments').factory('paymentsSrv', PaymentsDef);
    PaymentsDef.$inject = [];
    function PaymentsDef() {
        var factory = {};
        factory.paymentList = [];

        factory.add = function () {

            return id;
        }

        factory.remove = function (id) {
            //
        }

        return factory;
    }
})();
