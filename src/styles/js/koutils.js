Globalize.culture(document.culture);
Globalize.culture().numberFormat.currency.symbol = document.symbol;
Globalize.culture().numberFormat.currency.pattern = document.currencypattern.split(";");

(function (ko) {
    ko.bindingHandlers.textMoneyWithSymbol = {
        update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            var value = valueAccessor();
            var valueUnwrapped = ko.utils.unwrapObservable(value);
            var newtext = Globalize.format(valueUnwrapped, 'c');
            newtext = newtext.replace(" ","&nbsp;");
            $(element).html(newtext);
        }
    };

    ko.bindingHandlers.textMoneyWithSymbolMinus = {
        update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            var value = valueAccessor();
            var valueUnwrapped = ko.utils.unwrapObservable(value);
            var newtext = Globalize.format(valueUnwrapped, 'c');
            newtext = "-" + newtext.replace(" ","&nbsp;");
            $(element).html(newtext);
        }
    };
    
    ko.bindingHandlers.datelong = {
        update: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            if (value) {
                var date;
                if (value.constructor === Date)
                    date = value;
                else
                    var msec = Date.parse(value);
                    date = new Date(msec);
                $(element).text(Globalize.format(date, 'f'));
            }
            else
                $(element).text(null);
        }
    };
    
    ko.bindingHandlers.dateviday = {
        update: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            if (value) {
                var date;
                if (value.constructor === Date)
                    date = value;
                else
                    var msec = Date.parse(value);
                date = new Date(msec);
                $(element).text((Globalize.format(date, 'K')).replace('{0}','ngày'));
            }
            else
                $(element).text(null);
        }
    };
    
    ko.bindingHandlers.dateshorttime = {
        update: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            if (value) {
                var date;
                if (value.constructor === Date)
                    date = value;
                else
                    var msec = Date.parse(value);
                date = new Date(msec);
                $(element).text(Globalize.format(date, 't'));
            }
            else
                $(element).text(null);
        }
    };
    
    ko.bindingHandlers.textMoney = {
        update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            var value = valueAccessor();
            var valueUnwrapped = ko.utils.unwrapObservable(value);
            $(element).text(Globalize.format(valueUnwrapped, 'n'));
        }
    };

    ko.bindingHandlers.returnKey = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            ko.utils.registerEventHandler(element, 'keydown', function (evt) {
                if (evt.keyCode === 13) {
                    evt.preventDefault();
                    evt.target.blur();
                    value(viewModel);
                }
            });
        }
    };

    //<div data-bind="dynamichtml: Content"></div>
    ko.bindingHandlers.dynamichtml = {
        init: function () {
            return { controlsDescendantBindings: true };
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            ko.utils.setHtml(element, valueAccessor());
            ko.applyBindingsToDescendants(bindingContext, element);
        }
    };

    //---------------------------

    ko.expressionRewriting._twoWayBindings.numericValue = true;
    ko.expressionRewriting.writeValueToProperty = function (property, allBindings, key, value, checkIfDifferent) {
        if (!property || !ko.isObservable(property)) {
            var propWriters = allBindings.get('_ko_property_writers');
            if (propWriters && propWriters[key])
                propWriters[key](value);
        } else if (ko.isWriteableObservable(property) && (!checkIfDifferent || property.peek() !== value)) {
            property(value);
        }
    };
    ko.bindingHandlers.numericValue = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            $(element).on("keydown", function (event) {
                //console.log(event.keyCode);
                if (
                    // Allow: backspace, delete, tab, escape, and enter.
                    event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                        // Allow: Ctrl+A
                    (event.keyCode == 65 && event.ctrlKey === true) ||

                        // Allow: . ,
                    //(event.keyCode == 188 || event.keyCode == 190 || event.keyCode == 110) ||

                        // Allow: home, end, left, right.
                    (event.keyCode >= 35 && event.keyCode <= 40)) {
                    // Let it happen, don't do anything.
                    return;
                }
                else {
                    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                        event.preventDefault();
                        return;
                    }
                }
            });

            var underlying = valueAccessor();
            var interceptor = ko.dependentObservable({
                read: function () {
                    if (ko.isObservable(underlying) == false) {
                        return underlying;
                    } else {
                        return underlying();
                    }
                },
                write: function (value) {
                    if(value == "") value = 0;
                    if (ko.isObservable(underlying) == false) {
                        if (!isNaN(value)) {
                            var parsed = parseInt(value);
                            ko.expressionRewriting.writeValueToProperty(underlying, allBindingsAccessor, 'numericValue', !isNaN(parsed) ? parsed : 0);
                        }
                    } else {
                        if (!isNaN(value)) {
                            var parsed = parseInt(value);
                            underlying(!isNaN(parsed) ? parsed : 0);
                        }
                    }
                }
            });
            ko.bindingHandlers.value.init(element, function () { return interceptor; }, allBindingsAccessor, viewModel, bindingContext);
        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            ko.bindingHandlers.value.update(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
       }
    };

    ko.bindingHandlers.numericTextValue = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            $(element).on("keydown", function (event) {
                //console.log(event.keyCode);
                if (
                    // Allow: backspace, delete, tab, escape, and enter.
                event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                    // Allow: Ctrl+A
                (event.keyCode == 65 && event.ctrlKey === true) ||

                    // Allow: . ,
                    //(event.keyCode == 188 || event.keyCode == 190 || event.keyCode == 110) ||

                    // Allow: home, end, left, right.
                (event.keyCode >= 35 && event.keyCode <= 40)) {
                    // Let it happen, don't do anything.
                    return;
                }
                else {
                    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                        event.preventDefault();
                        return;
                    }
                }
            });

            var underlying = valueAccessor();
            var interceptor = ko.dependentObservable({
                read: function () {
                    if (ko.isObservable(underlying) == false) {
                        return underlying;
                    } else {
                        return underlying();
                    }
                },
                write: function (value) {
                    if(value == "") value = 0;
                    if (ko.isObservable(underlying) == false) {
                        ko.expressionRewriting.writeValueToProperty(underlying, allBindingsAccessor, 'numericTextValue', value);
                    } else {
                        underlying(value);
                    }
                }
            });
            ko.bindingHandlers.value.init(element, function () { return interceptor; }, allBindingsAccessor, viewModel, bindingContext);
        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            ko.bindingHandlers.value.update(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
        }
    };

    ko.bindingHandlers.fastclick = {
        init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
            FastClick.attach(element, function() {
                valueAccessor()(viewModel, event);
            });
            return ko.bindingHandlers.click.init.apply(this, arguments);
        }
    };

    //--------------------------
})(ko);


//-------- function  -----------------------------
var getImageSize = function (url,size) {
    if (url) {
        url = url.replace('https:', '');
        url = url.replace('http:', '');
        var matchs = /^(.*)(.jpg|.png|.bmp|.gif|.jpeg)$/g.exec(url);
        if (size) {
            if (matchs)
                return matchs[1].replace('http:', '') + "_" + size + matchs[2];
        } else {
            if (matchs)
                return matchs[1].replace('http:', '') + matchs[2];
            else
                return url;
        }
    }
};

var validateEmail = function (email){
    var self = this;
    var valid = true;
    if(email){
        email = email.toString();
        email = email.trim();
        if(email == ""){
            valid = false;
            return valid;
        }
        var patt01 = new RegExp("^guest@haravan.com$", 'gi');
        var patt02 = new RegExp("^khachhang@haravan.com$", 'gi');
        var patt03 = /^guest\+\d+@haravan.com$/gi;
        var patt04 = /^\d+\.phone@haravan.com$/gi;
        var res01 = patt01.test(email);
        var res02 = patt02.test(email);
        var res03 = patt03.test(email);
        var res04 = patt04.test(email);
        if(res01 || res02 || res03 || res04) valid = false;
        return valid;
    }else{
        valid = false;
        return valid;
    }
};


//function GenerateHrvOrderBarcode(OrderNumber) {
//    var strBarcodeHTML = code128(OrderNumber);
//    if(OrderNumber.length < 6){
//        $(".barcode128h").html(strBarcodeHTML);
//        $(".barcode128h").show();
//        $(".barcode128v").hide();
//    }else{
//        $(".barcode128v").html(strBarcodeHTML);
//        $(".barcode128v").show();
//        $(".barcode128h").hide();
//    }
//}





