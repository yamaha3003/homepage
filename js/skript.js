console.log("Hello my frend")
let sumElement = document.querySelector(".js-sum");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let sum = sumElement.value;
    let currency = currencyElement.value;
    let result = sum / currency;

    resultElement.innerText = result.toFixed(2);
})