function FactoryTextBill() {
    var billtotal = 0;
    var call = 0;
    var sms = 0;

    function textBill(text) {
        var billtext = text;
        if (billtext === "call") {
            call += 2.75
        } else if (billtext === "sms") {
            sms += 0.75;
        }
        billtotal = call + sms;
    }

    function billCallNum() {
        return call.toFixed(2);
    }

    function billSmsNum() {
        return sms.toFixed(2);
    }

    function billTotals() {
        return billtotal.toFixed(2);
    }
     function colourIndicate(){
        if (billTotals() > 30 && billTotals()< 50) {
            return "warning";
        }
        if(billTotals() > 50){
            return "danger"
        }
     }
    return {
        textBill,
        billCallNum,
        billSmsNum,
        billTotals,
        colourIndicate

    }
}