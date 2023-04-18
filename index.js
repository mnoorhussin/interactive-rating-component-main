const Main = document.querySelector(".main");
const ratingResult = document.querySelector(".rating-result");
const submitButton = document.getElementById("submit");
const returnButton = document.getElementById("return");
const rating = document.getElementById("rating");
const ratingsValue = document.querySelectorAll(".rating-value");

submitButton.addEventListener("click", () => {
  ratingResult.classList.remove("hidden");
  Main.style.display = "none";
});
returnButton.addEventListener("click", () => {
  ratingResult.classList.add("hidden");
  Main.style.display = "block";
});

ratingsValue.forEach((ratingValue) => {
  ratingValue.addEventListener("click", () => {
    rating.innerHTML = ratingValue.innerHTML;
  });
});
