const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".arrow.left");
const nextBtn = document.querySelector(".arrow.right");

let index = 0;

function showSlide(i) {
  index = (i + images.length) % images.length;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

prevBtn.addEventListener("click", () => showSlide(index - 1));
nextBtn.addEventListener("click", () => showSlide(index + 1));

window.addEventListener("load", function () {
  window.location.hash = "#home";
  window.scrollTo(0, 0);
});

const bgimages = [
  "assets/build cap.webp",
  "assets/checkpoint cap.webp",
  "assets/crime cap.webp",
  "assets/hazmat cap.webp",
  "assets/science cap.webp",
  "assets/shoot cap.webp",
  "assets/zombie cap.webp",
];

let i = 0;

setInterval(() => {
  document.body.style.backgroundImage = `url("${bgimages[i]}")`;
  i = (i + 1) % bgimages.length;
}, 2000);
