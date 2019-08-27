// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var billTypeText = document.querySelector(".billTypeText");
var addToBillBtn = document.querySelector(".addToBillBtn");
var callTotalOne= document.querySelector(".callTotalOne");
var smsTotalOne = document.querySelector(".smsTotalOne");
var totalOne = document.querySelector(".totalOne");
 var billcost = FactoryTextBill();


var callsTotal1 = 0;
var smsTotal = 0;
// function textBillTotal(){
//
    
//     callTotalOne.innerHTML =  billcost.billCallNum();
//     smsTotalOne.innerHTML = billcost.billSmsNum();
//     totalOne.innerHTML = billcost.billTotals();

//     if (billcost.billTotals() >= 30){
        
//         totalOne.classList.add("warning");
//     }
//     if (billcost.billTotals() >= 50){
        
//         totalOne.classList.add("danger");
//     }
var templateSource = document.querySelector(".userTextTemplate").innerHTML;

// compile the template
var userTextTemplate = Handlebars.compile(templateSource);

var userTextDataElem = document.querySelector(".textData"); 

function jason(){

billcost.textBill(billTypeText.value)
var color = billcost.colourIndicate();
// compile the template
var userTextDataHTML = userTextTemplate({
    call :"R" + billcost.billCallNum(),
    sms : 'R' + billcost.billSmsNum(),
    total : 'R'  + billcost.billTotals(),
    color
});
userTextDataElem.innerHTML = userTextDataHTML;

}




// }

addToBillBtn.addEventListener('click', jason);
