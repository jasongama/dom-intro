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

var templateSource = document.querySelector(".userTextTemplate").innerHTML;

// compile the template
var userTemplate = Handlebars.compile(templateSource);

var userDataElem = document.querySelector(".userData2"); 


function radioBillTotal(){
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

        radioNum.billRadioText(checkedRadioBtn.value);
var color = radioNum.colourIndicate();

var userData2HTML = userTemplate({
    call :"R" + radioNum.radioCall(),
    sms : 'R' + radioNum.radioSms(),
    total : 'R'  + radioNum.radioBillTotal(),
    color
});
userDataElem.innerHTML = userData2HTML;



}




radioBillAddBtnElement.addEventListener('click', radioBillTotal);
