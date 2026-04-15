let btn = document.querySelector("#btn");
let videTrailer = document.querySelector(".video-trailer");
let vid = document.querySelector("video");
let closeIcon = document.querySelector("i");

btn.addEventListener("click", () => {
  videTrailer.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
  videTrailer.classList.add("active");
  vid.pause();
  vid.currentTime = 0;
});
