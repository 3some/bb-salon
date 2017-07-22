(function (ko) {
	ko.bindingHandlers.moneyMask = {
        init: function (element, valueAccessor, allBindingsAccessor) {
            var options = allBindingsAccessor().currencyMaskOptions || {};
            $(element).maskMoney({ thousands: Globalize.culture().numberFormat[','], precision: 0, allowZero: false, defaultZero: false });
            ko.utils.registerEventHandler(element, 'focusout', function () {
                var observable = valueAccessor();
                var numericVal = Globalize.parseFloat($(element).val());
                numericVal = isNaN(numericVal) ? null : numericVal;
                observable(numericVal);
                $(this).change();
            });
            var isValueUpdate = allBindingsAccessor().valueUpdate === "afterkeydown";
            if (isValueUpdate) {
                ko.utils.registerEventHandler(element, 'keyup', function () {
                    var observable = valueAccessor();
                    var numericVal = Globalize.parseFloat($(element).val());
                    numericVal = isNaN(numericVal) ? null : numericVal;
                    observable(numericVal);
                });
            }
            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                $(element).maskMoney('destroy');
            });
        },

        update: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            $(element).val(Globalize.format(value, 'n'));
        }
    };

	var initMoney = ko.bindingHandlers['moneyMask'].init;

    ko.bindingHandlers['moneyMask'].init = function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

        initMoney(element, valueAccessor, allBindingsAccessor);

        return ko.bindingHandlers['validationCore'].init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
    };
})(ko);