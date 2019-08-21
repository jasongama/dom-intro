// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");


var radioNum = FactoryRadioBillText();

var callsTotalTwo = 0;
var smsTotal = 0;



function radioBillTotal(){
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
        

        if (billItemType === "call"){
            callsTotalTwo += 2.75;
        }
        else if (billItemType === "sms"){
            smsTotal += 0.75;
        }
    }
    
    callTotalTwoElement.innerHTML = radioNum.radioCall();
    smsTotalTwoElement.innerHTML = radioNum.radioSms();
    totalTwoElement.innerHTML = radioNum.radioBillTotal();

    if (totalCost >= 50){
        totalTwoElement.classList.add("danger");
    }
    if (totalCost >= 30){
        totalTwoElement.classList.add("warning");
    }
}



radioBillAddBtnElement.addEventListener('click', radioBillTotal);
