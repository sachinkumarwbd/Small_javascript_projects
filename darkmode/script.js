let lightmoon = document.querySelector(".ri-moon-line");
let darkmoon = document.querySelector(".ri-moon-fill");

lightmoon.addEventListener("click", () => {
  lightmoon.classList.toggle("ri-moon-line");
  if (lightmoon.classList.contains("ri-moon-fill")) {
    document.body.classList.add("ri-moon-fill");
  } else {
    document.body.classList.remove("ri-moon-line");
  }
  darkmoon.style.display = "block";
  document.body.classList.toggle("dark-mode");
});

darkmoon.addEventListener("click", () => {
  darkmoon.classList.toggle("ri-moon-line");
  if (lightmoon.classList.contains("ri-moon-fill")) {
    document.body.classList.add("ri-moon-line");
  } else {
    document.body.classList.remove("ri-moon-fill");
  }
  document.body.classList.toggle("dark-mode");
});
