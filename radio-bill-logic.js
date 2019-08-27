function FactoryRadioBillText() {
    var billNumTotal = 0;
    var call = 0;
    var sms = 0;

    function billRadioText(radioText) {
        var RadioBillText= radioText;
        if ( RadioBillText === "call") {
            call += 2.75
        } else if ( RadioBillText === "sms") {
            sms += 0.75;
        }
        billNumTotal = call + sms;
        
        
    }

    function radioCall() {
        return call.toFixed(2)
    }

    function radioSms() {
        return sms.toFixed(2)

    }

    function radioBillTotal() {
        return  billNumTotal.toFixed(2);
    }
    function colourIndicate(){
        if (radioBillTotal() > 30 && radioBillTotal()< 50) {
            return "warning";
        }
        if(radioBillTotal() > 50){
            return "danger"
        }
     }


    return {
        billRadioText,
        radioCall,
        radioSms,
        radioBillTotal,
        colourIndicate
    }
}