let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

clock = () => {
  let time = new Date();
  hrs.innerHTML = String(time.getHours()).padStart(2, "0");
  min.innerHTML = String(time.getMinutes()).padStart(2, "0");
  sec.innerHTML = String(time.getSeconds()).padStart(2, "0");
};

setInterval(clock, 1000);
