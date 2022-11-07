{
    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = result.toFixed(2);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const sumElement = document.querySelector(".js-sum");
        const currencyElement = document.querySelector(".js-currency");

        const sum = sumElement.value;
        const currency = currencyElement.value;
        const result = sum / currency;

        updateResultText(result);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit)
    }
    init();
}