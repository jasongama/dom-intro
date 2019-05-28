// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var radioBillSettingsAddBtn = document.querySelector(".radioBillSettingsAddBtn");
var callTotalSettingsElement = document.querySelector(".callTotalSettings");
var smsTotalSettingsElement = document.querySelector(".smsTotalSettings");
var totalSettingsElement = document.querySelector(".totalSettings");

var updateSettings= document.querySelector(".updateSettings");
var callCostSetting = document.querySelector(".callCostSetting");
//console.log(callCostSetting.value)
var smsCostSetting=document.querySelector(".smsCostSetting");
var warningLevelSettingElement=document.querySelector(".warningLevelSetting");
var criticalLevelSettingElement=document.querySelector(".criticalLevelSetting");


var callTotaltwoSettings = 0;
var smsTotaltwoSettings = 0;
var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var criticalLevel = 0;
var totalCostSettings = 0;

function BillWithSettings(){

var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

var checkedRadioBtnSettings =  checkedRadioBtn.value;

    if (checkedRadioBtn) {
        
        var billItemTypeWithSettings = checkedRadioBtn.value
    
        if (billItemTypeWithSettings === "call"){
            callTotaltwoSettings += callCost;
        }
        else if (billItemTypeWithSettings === "sms"){
            smsTotaltwoSettings += smsCost;
        }
    }
    //console.log(callTotaltwoSettings)
   callTotalSettingsElement.innerHTML = callTotaltwoSettings.toFixed(2);
        smsTotalSettingsElement.innerHTML = smsTotaltwoSettings.toFixed(2);
     totalCostSettings = callTotaltwoSettings + smsTotaltwoSettings;
    totalSettingsElement.innerHTML = totalCostSettings.toFixed(2);

     if (totalCostSettings >= criticalLevel){
        totalSettingsElement.classList.add("danger");
    }
     if (totalCostSettings >= warningLevel ){
        totalSettingsElement.classList.add("warning");
        
    }

    if (totalCostSettings < warningLevel ){
        totalSettingsElement.classList.remove("warning");
    }
    if (totalCostSettings >= criticalLevel){
       
        radioBillSettingsAddBtn.disabled = true;
        
    }
}




function settings(){

     callCost = Number(callCostSetting.value);
     smsCost = Number(smsCostSetting.value) ;
    //console.log(smsCost);
     warningLevel =  warningLevelSettingElement.value;
    criticalLevel=  criticalLevelSettingElement.value;

    callCostSetting.innerHTML = callTotaltwoSettings.toFixed(2);
    smsCostSetting.innerHTML = smsTotaltwoSettings.toFixed(2);
  totalCostSettings = callTotaltwoSettings + smsTotaltwoSettings;
totalSettingsElement.innerHTML = totalCostSettings.toFixed(2);
if (totalCostSettings < criticalLevel){
       
    radioBillSettingsAddBtn.disabled = false;
    
}
if (totalCostSettings >= criticalLevel){
    radioBillSettingsAddBtn.disabled = true;
}
if (totalCostSettings >= criticalLevel){
    totalSettingsElement.classList.add("danger");
    totalSettingsElement.classList.remove("warning");
}
 if (totalCostSettings >= warningLevel ){
    totalSettingsElement.classList.add("warning");
    totalSettingsElement.classList.remove("danger");

}

if (totalCostSettings < warningLevel){
    totalSettingsElement.classList.remove("warning");
    totalSettingsElement.classList.remove("danger");

}
if (criticalLevel < totalCostSettings){
    totalSettingsElement.classList.remove("warning");
    totalSettingsElement.classList.add("danger");

}

}
radioBillSettingsAddBtn.addEventListener('click', BillWithSettings);

updateSettings.addEventListener("click", settings );
