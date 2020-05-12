
// currency ratio (23,214.79)
const currencyRatio = 23214.79;

// beginning prompts
//let chooseCurrency = prompt("Do you want to convert to USD or VND?")
let from = document.getElementById("fromCurrencyList")
 // this is the "from" list from HTML
 console.log("what is from",from)
let to = document.getElementById("toCurrencyList")
// this hooks with HTML:
let amount = document.getElementById("amountInput")
// this also hooks with HTML:
let result = document.getElementById("resultArea") // this is only a tag, not an actual variable amount
let convertedAmount = 0
let formatamount = '' // used to get value after it is formatted
let convertButton = document.getElementById('convertButton');

let fromCurrency = document.getElementById("fromCurrencyList"); console.log(fromCurrency.value);



// converting function: USD to VND
function usdToVnd(amountUsd){
  let resultUserInput = amount.value;
  console.log("what is resultUserInput",resultUserInput)
  let convertedAmount = resultUserInput * currencyRatio;
  console.log("what is converted Amount",convertedAmount)
  return convertedAmount // return is common to "throw" the value output
  // document.getElementById("result").innerHTML = `your money in VND is ${convertedAmount}`;
  // back tick is for innerHTML; that sentence will show in HTML
}

// VND to USD 
function vndToUsd() {
  let resultUserInput = amount.value; // grab the value that user typed at input box
  // let is just for reference; you need to change the details (in this case, 'amount')
  let convertedAmount = resultUserInput / currencyRatio;
  return convertedAmount
  // document.getElementById("result").innerHTML = `your money in USD is ${convertedAmount}`;
}


function formatCurrency(type,value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}

// this occurs when user clicks the "Convert" button
function convert(){

	if(from.value === "VND" && to.value === "USD"){
		convertedAmount = vndToUsd()
		formatAmount = formatCurrency(to.value,convertedAmount)
		// "to" tells the currency you want (it means the "type")
		// console.log("What is the value of the format amount",formatamount)
		
	}else if(from.value=== "USD" && to.value === "VND"){
		convertedAmount = usdToVnd()
    formatAmount = formatCurrency(to.value,convertedAmount)
    
	}else{
		alert("Please select the correct currency to convert to!")
		return; 
  }
  result.innerHTML = `The result is ${formatAmount}`
}


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



// console.log(formatCurrency('en-US', { style: 'currency', currency: 'USD' }).format(amount));

