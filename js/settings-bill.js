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
var settingBillAddBtn = document.querySelector(".addSettinBtn");
var callTotalSettings= document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");

var callsTotal = 0;
var smsTotal = 0;

function radioSettingBillTotal(){

var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
        var billItemTypeSettings = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
        if (billItemTypeSettings === "call"){
            callsTotal += 2.75
        }
        else if (billItemTypeSettings === "sms"){
            smsTotal += 0.75;
        }
    }
    
    //update the totals that is displayed on the screen.
    callTotalSettings.innerHTML = callsTotal.toFixed(2);
    smsTotalSettings .innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalSettings.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 30){
        
        totalSettings.classList.add("warning");
    }
    if (totalCost >= 50){
        
        totalSettings.classList.add("danger");
    }
}

settingBillAddBtn.addEventListener('click', radioSettingBillTotal);





