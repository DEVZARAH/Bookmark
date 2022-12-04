const btn = document.querySelector("#menuBtn");
const navList = document.querySelector("#menu");
btn.addEventListener("click", () => {
  btn.classList.toggle(".open");
  navList.classList.toggle(".navcon");
});
