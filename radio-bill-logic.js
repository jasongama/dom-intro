function FactoryRadioBillText() {
    var billTotal = 0;
    var call = 0;
    var sms = 0;

    function billRadioText(radioText) {
        var billtext = radioText;
        if (billtext === "call") {
            call += 2.75
        } else if (billtext === "sms") {
            sms += 0.75;
        }
        billtotal = call + sms;
    }

    function radioCall() {
        return call.toFixed(2)
    }

    function radioSms() {
        return sms.toFixed(2)

    }

    function radioBillTotal() {
        return billTotal.toFixed(2);
    }



    return {
        billRadioText,
        radioCall,
        radioSms,
        radioBillTotal
    }
}