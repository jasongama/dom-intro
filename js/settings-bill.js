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

var callTotaltwoSettings = 0;
var smsTotaltwoSettings = 0;



function BillWithSettings(){

var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
var checkedRadioBtnSettings =  checkedRadioBtn.value;
//console.log(checkedRadioBtnSettings)
    if (checkedRadioBtn) {
        
        var billItemTypeWithSettings = checkedRadioBtn.value
        if (billItemTypeWithSettings === "call"){
            callTotaltwoSettings += 2.75
        }
        else if (billItemTypeWithSettings === "sms"){
            smsTotaltwoSettings += 0.75;
        }
    }
  
   callTotalSettingsElement.innerHTML = callTotaltwoSettings.toFixed(2);
        smsTotalSettingsElement.innerHTML = smsTotaltwoSettings.toFixed(2);
     var totalCostSettings = callTotaltwoSettings + smsTotaltwoSettings;
    totalSettingsElement.innerHTML = totalCostSettings.toFixed(2);

     if (totalCostSettings >= 50){
        totalSettingsElement.classList.add("danger");
    }
     if (totalCostSettings >= 30){
        totalSettingsElement.classList.add("warning");
    }
}
var updateSettingsAddBtn= document.querySelectorAll(".updateSettingsAddBtn");
var callCostSettingElement=document.querySelectorAll(".callCostSetting");
var smsCostSettingElement=document.querySelectorAll(".smsCostSetting");
var warningLevelSettingElement=document.querySelectorAll(".warningLevelSetting");
var criticalLevelSettingElement=document.querySelectorAll(".criticalLevelSetting");


var callTotaltwoSettings = 0;
var smsTotaltwoSettings = 0;

function settings(){


}
radioBillSettingsAddBtn.addEventListener('click', BillWithSettings);
updateSettingsAddBtn.addEventListener('click', settings );
