let generateBtn = document.getElementById("btn");
let qouteText = document.getElementById("qoute");
let author = document.getElementById("auth");
let copyText = document.getElementById("icon");

copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(qouteText.innerText);
  alert("text copied");
});

generateBtn.addEventListener("click", () => {
  async function getQoute() {
    let response = await fetch("https://dummyjson.com/quotes/random");
    let data = await response.json();
    qouteText.innerHTML = data.quote;
    author.innerHTML = data.author;
  }
  getQoute();
});
