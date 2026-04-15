let inputVal = document.querySelector("#number");
let finalVal = document.querySelector("#kg");

inputVal.addEventListener("input", () => {
  if (inputVal.value < 0) {
    alert("Please enter a positive number");
    finalVal.value = "Enter a positive number";
  } else {
    let num = inputVal.value;
    let weightKg = num * 0.453592;
    finalVal.innerHTML = weightKg.toFixed(2);
  }
});