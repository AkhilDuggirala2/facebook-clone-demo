const headerimages = document.querySelector(".headerimg1");
const tri = document.querySelector(".triangle");
const box = document.querySelector(".hdn-box");

headerimages.addEventListener("click", () => {
  box.classList.toggle("active");
  tri.classList.toggle("active");
});
