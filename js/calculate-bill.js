var billStringElement = document.querySelector(".billString");
var calculateBtn = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");

function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringElement.value;
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;

    if(roundedBillTotal >= 20){
        billTotalElement.classList.remove("danger")
    billTotalElement.classList.add("warning")
} 
if(roundedBillTotal < 20){
    billTotalElement.classList.remove("warning")
}

if(roundedBillTotal >= 30){
    billTotalElement.classList.remove("warning")
    billTotalElement.classList.add("danger")
}
if (roundedBillTotal < 30){
    billTotalElement.classList.remove("danger")
}


}
calculateBtn.addEventListener('click', calculateBtnClicked);