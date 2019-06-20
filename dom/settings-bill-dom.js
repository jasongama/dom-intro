

 
function FactoryBillWithSettingsTotal(){
 
     var callTotaltwoSettings = 0;
    var smsTotaltwoSettings = 0;
    var warningLevel = 0;
    var criticalLevel = 0;
    var totalCostSettings = 0;

    function  setItCall(callPrice){
        callTotaltwoSettings += callPrice;
    }
    function  setItSms(smsPrice){
        smsTotaltwoSettings += smsPrice;
    }
    function criticalLevel(){
       return totalCostSettings >= criticalLevel;
        
    } 
    function warningLevel(){
         return totalCostSettings >= warningLevel;
      
    }
     
    function  setTotal(){
        totalCostSettings = callTotaltwoSettings + smsTotaltwoSettings;
    }
    function getItCall(){
     return callTotaltwoSettings.toFixed(2);
    }
       function getItSms(){
        return smsTotaltwoSettings.toFixed(2);
       }
       function getItTotal(){
           return totalCostSettings.toFixed(2);
       }
       function updateSettings(critical,warning){
        criticalLevelSettingElement = critical;
        warningLevelSettingElement = warning;
       }

       return {
        getItCall, 
        getItSms,
        getItTotal,
        setItCall, 
        setItSms,
        setTotal,
        warningLevel,
        criticalLevel,
        updateSettings, 
        //setTotal
       }
       

}

// FactoryBillWithSettingsTotal1 = FactoryBillWithSettingsTotal();

// FactoryBillWithSettingsTotal1.setItCall(4);
// FactoryBillWithSettingsTotal1.setItCall(4);
// FactoryBillWithSettingsTotal1.setItCall(4);

// var calls = FactoryBillWithSettingsTotal1.getItCall();

// alert(calls)