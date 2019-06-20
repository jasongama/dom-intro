var billStringElement = document.querySelector(".billString");
var calculateBtn = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");


var calculateBill = FactoryCalculateBill();

function calculateBtnClicked() {
    var billType = billStringElement.value;
    var billTotal = calculateBill.billString(billType);
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;

    var color = calculateBill.colorIndicator(billTotal);
    if (color == "danger") {
        billTotalElement.classList.add(color);
        billTotalElement.classList.remove("warning");

    } else if (color == "warning") {
        billTotalElement.classList.add(color);
        billTotalElement.classList.remove("danger");
    } else {
        billTotalElement.classList.remove("danger");
        billTotalElement.classList.remove("warning");
    }
}
calculateBtn.addEventListener('click', calculateBtnClicked);