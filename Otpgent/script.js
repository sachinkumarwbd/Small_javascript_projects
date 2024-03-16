let button = document.querySelector("button");
let input = document.querySelector("input");

let generateOTP = () => {
  const otp = Math.floor(100000 + Math.random() * 900000);

  document.querySelector("p").innerText = otp;
};

document.querySelector("button").addEventListener("click", generateOTP);
window.addEventListener("load", generateOTP);
