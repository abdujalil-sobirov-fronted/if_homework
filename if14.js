let a = Number(prompt("ikki xonali son kiriting"));
let b = a%10;
let c = (a-b)/10;
let d = b*10+c;
if (d>=a) {
  console.log("False");
}else if (d<a) {
  console.log("True");
}