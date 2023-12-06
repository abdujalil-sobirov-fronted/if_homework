let a = Number(prompt("a sonini kiriting"));
let b = Number(prompt("b sonini kiriting"));
let c = Number(prompt("c sonini kiriting"));
if (a>b && a>c) {
  console.log(a);
}else if (b>a && b>c) {
  console.log(b);
}else if (c>a && c>b) {
  console.log(c);
}else {
  console.log("Bir xil raqam kiritmang");
}