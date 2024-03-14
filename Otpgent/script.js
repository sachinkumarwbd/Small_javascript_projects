let button = document.querySelector("button");
let input = document.querySelector("input");

// button.addEventListener("click", (e) => {
//   let opt = Math.floor(Math.random() * 9000 + 1000);
//   console.log(opt);
// });

let generateOTP = () => {
  //Define the length of the OTP

  // Generate a random numeric OTP with exactly 6 digits
  const otp = Math.floor(100000 + Math.random() * 900000);
  // console.log(otp);
  document.querySelector("p").innerText = otp;

  //Display the generated OTP
};

document.querySelector("button").addEventListener("click", generateOTP);
window.addEventListener("load", generateOTP);
