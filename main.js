
// currency ratio (23,214.79)
const currencyRatio = 23214.79;
let result = 0

// beginning prompts
let chooseCurrency = prompt("Do you want to convert to USD or VND?")
let amount = prompt("What's the amount you want to convert?")

// 2. define from currency
//let from = "USD"

// 3. define to currency 
//let to = "VND"

// rounded to 2 decimals



// converting function: USD to VND
function usdToVnd(amountUsd){
    return amountUsd * currencyRatio;
}

// VND to USD
function vndToUsd(amountVnd) {
    return amountVnd / currencyRatio;
}

//bilateral conversion
function bilateralConversion() {
    console.log(chooseCurrency.toLowerCase())
    if (chooseCurrency.toLowerCase() === "vnd"){
        console.log("im here 1");
        result = usdToVnd(amount);
    } else if (chooseCurrency.toLowerCase() === "usd") {
        console.log("im here 2")
        result = vndToUsd(amount)
        result = Math.round((result + Number.EPSILON) * 100) / 100;
    }
    alert(result)
}

bilateralConversion()

// converting amount
// if (from.toLowerCase() === "usd" && to === "vnd"){
//     result = usdToVnd(amount);
//     alert(result);
//     } else if (from.toLowerCase === "vnd" && to === "usd"){
//     result = vndToUsd(amount);
//     alert(result);
//     } else {
//         console.log("You chose the wrong currency");
//         alert(result);
// }  

// check validate number
function checkInp(){
  if (isNaN(amount));
  {
    alert("Must input numbers");
    return false;
  }
}

//console.log(from," to ",to,"is ",result);
