let amount = document.querySelector("#amount");
let percentage = document.querySelector("#percentage");
let calcBtn = document.querySelector("#calculateBtn");
let result = document.querySelector("#total");

calcBtn.addEventListener("click", () => {
  if (isNaN(amount.value) || isNaN(percentage.value)) {
    result.innerHTML = " enter a valid number";
    return;
  }

  let Amount = Number(amount.value);
  let Percentage = Number(percentage.value);
  let Result = Amount * (Percentage / 100);
  let FinalResult = Number(Result + Amount);
  result.innerHTML = FinalResult;
});
