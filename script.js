let time = document.querySelector(".time");
function hour() {
  let date = new Date();
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  time.textContent = `${hours}:${minutes}`;
}
hour();
setInterval(() => {
  hour();
}, 1000);
let time1 = document.querySelector(".time1");
function hour1() {
  let date = new Date();
  let seconds = date.getSeconds().toString().padStart(2, "0");
  time1.textContent = seconds;
}
hour1();
setInterval(() => {
  hour1();
}, 1000);
