let exchangeFrom = document.querySelector("#Exchange-From");
let exchangeTo = document.querySelector("#Exchange-To");
let fromInput = document.querySelector("#exchangeFrom");
let toInput = document.querySelector("#exchangeTo");
let exchangeRate = document.querySelector("#exchange-Rate");

// guys add your own api key in the url below to make it work
function update() {
  fetch(
    `https://v6.exchangerate-api.com/v6/65dfdfc0d89b687746740226/latest/${exchangeFrom.value}`,
  )
    .then((response) => response.json())
    .then((data) => {
      let rate = data.conversion_rates[exchangeTo.value];
      exchangeRate.innerHTML = `1 ${exchangeFrom.value} = ${rate.toFixed(2)} ${exchangeTo.value}`;
      let finalResult = (toInput.value = fromInput.value * rate.toFixed(2));
      toInput.innerHTML = finalResult;
    });
}

exchangeFrom.addEventListener("change", update);
exchangeTo.addEventListener("change", update);
fromInput.addEventListener("input", update);
