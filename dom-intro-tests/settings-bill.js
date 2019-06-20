// get a reference to the sms or call radio buttons

// get refences to all the settings fields

// get a reference to the add button

// get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

// add an event listener for when the 'Update settings' button is pressed

// add an event listener for when the add button is pressed

// in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var radioBillSettingsAddBtn = document.querySelector(".radioBillSettingsAddBtn");
var callTotalSettingsElement = document.querySelector(".callTotalSetting");
var smsTotalSettingsElement = document.querySelector(".smsTotalSetting");
var totalSettingsElement = document.querySelector(".totalSettings");

var updateSettings= document.querySelector(".updateSettings");
var callCostSetting = document.querySelector(".callCostSetting");
//console.log(callCostSetting.value)
var smsCostSetting=document.querySelector(".smsCostSetting");
var warningLevelSettingElement=document.querySelector(".warningLevelSetting");
var criticalLevelSettingElement=document.querySelector(".criticalLevelSetting");


var FactoryBillWithSettingsTotals = FactoryBillWithSettingsTotal();

function BillWithSettings(){
    var callTotalSettingsElement = document.querySelector(".callCostSetting");
    var smsTotalSettingsElement = document.querySelector(".smsTotalSetting");

    var callTotalSettingsVal = Number(callTotalSettingsElement).value;
    var smsTotalSettingsVal = Number(smsTotalSettingsElement).value;

var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
//alert(callTotalSettingsVal)
// var checkedRadioBtnSettings =  checkedRadioBtn.value;
var billItemTypeWithSettings = checkedRadioBtn.value

    if (checkedRadioBtn) {
        
       
    
        if (billItemTypeWithSettings === "call"){
            FactoryBillWithSettingsTotals.setItCall(callTotalSettingsVal)
            callTotalSettingsElement.innerHTML = FactoryBillWithSettingsTotals.getItCall();
            // alert(callTotalSettingsVal)
        }
        else if (billItemTypeWithSettings === "sms"){
            FactoryBillWithSettingsTotals.setItSms(smsTotalSettingsVal)
            callTotalSettingsElement.innerHTML = FactoryBillWithSettingsTotals.getItSms();
        }
    }
    //    //console.log(callTotaltwoSettings)
    //  callTotalSettingsElement.innerHTML = FactoryBillWithSettingsTotals.getItCall();
    //  smsTotalSettingsElement.innerHTML =  FactoryBillWithSettingsTotals.getItSms();
    //  // totalCostSettings = callTotaltwoSettings + smsTotaltwoSettings;
    //  totalSettingsElement.innerHTML = FactoryBillWithSettingsTotals.getItTotal() ;

    //  if ( FactoryBillWithSettingsTotals.getItTotal() >= criticalLevel){
    //     totalSettingsElement.classList.add("danger");
    // }
    //  if ( FactoryBillWithSettingsTotals.getItTotal() >= warningLevel ){
    //     totalSettingsElement.classList.add("warning");
        
    // }

    // if ( FactoryBillWithSettingsTotals.getItTotal() < warningLevel ){
    //     totalSettingsElement.classList.remove("warning");
    // }
    // if ( FactoryBillWithSettingsTotals.getItTotal() >= criticalLevel){
       
    //     radioBillSettingsAddBtn.disabled = true;
        
    // }
}




// function settings(){

//      callCost = Number(callCostSetting.value);
//      smsCost = Number(smsCostSetting.value) ;
//     //console.log(smsCost);
 

// if ( FactoryBillWithSettingsTotals.getItTotal() < criticalLevel){
       
//     radioBillSettingsAddBtn.disabled = false;
    
// }
// if ( FactoryBillWithSettingsTotals.getItTotal() >= criticalLevel){
//     radioBillSettingsAddBtn.disabled = true;
// }
// if ( FactoryBillWithSettingsTotals.getItTotal() >= criticalLevel){
//     totalSettingsElement.classList.add("danger");
//     totalSettingsElement.classList.remove("warning");
// }
//  if ( FactoryBillWithSettingsTotals.getItTotal() >= warningLevel ){
//     totalSettingsElement.classList.add("warning");
//     totalSettingsElement.classList.remove("danger");

// }

// if ( FactoryBillWithSettingsTotals.getItTotal() < warningLevel){
//     totalSettingsElement.classList.remove("warning");
//     totalSettingsElement.classList.remove("danger");

// }
// if ( FactoryBillWithSettingsTotals.getItTotal() < totalCostSettings){
//     totalSettingsElement.classList.remove("warning");
//     totalSettingsElement.classList.add("danger");

// }

// }
radioBillSettingsAddBtn.addEventListener('click', BillWithSettings);

//updateSettings.addEventListener("click", settings );



 
  