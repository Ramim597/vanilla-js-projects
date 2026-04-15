let containers = [
  document.querySelector(".container1"),
  document.querySelector(".container2"),
  document.querySelector(".container3"),
];

let current = 0;

function showTestomonial() {
  containers.forEach((container) => {
    container.style.display = "none";
  });

  containers[current].style.display = "block";

  current = (current + 1) % containers.length;
}

showTestomonial();
setInterval(showTestomonial, 5000);
