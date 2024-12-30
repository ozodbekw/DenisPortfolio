const burger = document.querySelector("#burger");
const closeBtn = document.querySelector("#close");
const navbar = document.querySelector("#hidden-nav");

burger.addEventListener("click", () => {
  navbar.classList.remove("hidden");
  navbar.classList.add("flex");
});
closeBtn.addEventListener("click", () => {
  navbar.classList.add("hidden");
  navbar.classList.remove("flex");
});
