   
const tickform = document.getElementById("form");
const deliverys = document.getElementById("delivery");
const btn = document.getElementById("button");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");
const output4 = document.getElementById("output4");
const output5 = document.getElementById("output5"); 
const phan = document.getElementById("phantom of the opera").innerText
const seat = document.getElementById("seats");
const show = document.getElementById("shows");
const soutput = document.getElementById("showoutput");
const doutput = document.getElementById("deliveryoutput");

btn.addEventListener("click", calculate);
show.addEventListener("change", displaySelectshows);
deliverys.addEventListener("change", displaySelectdelivery);
function displaySelectshows() {
    let showVal = show.options[show.selectedIndex].value;
    let selectShow = show.options[show.selectedIndex].innerText;
    soutput.innerText = `${selectShow}:  £${showVal}`;
    if (showVal == 0) {
        soutput.innerText = `${selectShow}`;
    }
}
function displaySelectdelivery() {
    let selectVal = deliverys.options[deliverys.selectedIndex].value;
    let selectName = deliverys.options[deliverys.selectedIndex].innerText;
    doutput.innerText = `${selectName}:  £${selectVal}`; 
    if (selectVal == 100) {
        doutput.innerText = `${selectName}`;
    }
    else if (selectVal == 1) {
    doutput.innerText = `${selectName}:    Free!`;
    }
}

function calculate() {
    if (tickform.checkValidity()) {
    event.preventDefault();
                let showValue = show.options[show.selectedIndex].value;
    let showSeat = seat.value * showValue;
    let deliveryVal1 = deliverys.options[deliverys.selectedIndex].value;
    let deliveryVal2 = parseFloat(deliveryVal1)
    let totalCost = showSeat + deliveryVal2;
    if (seat.value>=10) {
        let finalCost1 = (showSeat + deliveryVal2) * 0.85;
        let finalCost2 = finalCost1.toFixed(2);
        let discount1 = (showSeat + deliveryVal2) * 0.15;
        let discount2 = discount1.toFixed(2);
        output5.innerText = `total cost  £${finalCost2}`;
        output3.innerText = `added 15% discount:  £${discount2}`;
    }
    else if (seat.value>=6){
        let finalCost1 = (showSeat + deliveryVal2) * 0.9;
        let finalCost2 = finalCost1.toFixed(2);
        let discount1 = (showSeat + deliveryVal2) * 0.10;
        let discount2 = discount1.toFixed(2);
        output5.innerText = `total cost    £${finalCost2}`;
        output3.innerText = `added 10% discount:  £${discount2}`;
    }
    else {
        let finalCost1 = showSeat + deliveryVal2; 
        let finalCost2 = finalCost1.toFixed(2);
        output5.innerText = `Final cost:    £${finalCost2}`;
        output3.innerText = `No discount`;
    }

    if (show.value == 0) {
        alert("please select both a ticket type and a show");
        location.reload()
    }


    else if (deliverys.value == 100) {
        alert("please select both a ticket type and a show");
        location.reload()
    }

    output1.innerText = `${seat.value} tickets for ${show.options[show.selectedIndex].innerText} at £${showValue}.00`;
    output2.innerText = `Total cost:    £${totalCost}`
    if (deliveryVal2 == 1) {
        output4.innerText = `collect tickets from ${deliverys.options[deliverys.selectedIndex].innerText}`;
    }
    else if (deliveryVal2 !== 1){
    output4.innerText = `collect tickets from ${deliverys.options[deliverys.selectedIndex].innerText}:  £${deliveryVal2}`;
    }  
    }
}
 