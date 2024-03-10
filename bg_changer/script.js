let btn = document.querySelector("button");

let randomcolor = () => {
  return Math.floor(Math.random() * 256);
};

let changecolor = () => {
  let changecolors = `rgb(${randomcolor()},${randomcolor()},${randomcolor()})`;
  document.body.style.backgroundColor = changecolors;
};
btn.addEventListener("click", changecolor);
window.addEventListener("load".changecolor);
