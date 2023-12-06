let a = Number(prompt("a sonini kiriting"));
let b = Number(prompt("b sonini kiriting"));
let c = Number(prompt("c sonini kiriting"));
if ((a>b & a<c) || (a<b & a>c)) {
  console.log("1 chi kiritilgan son bu sonlarning o'rtanchasi")
}else if ((b>a & b<c) || (b<a & b>c)){
  console.log("2 chi kiritilgan son bu sonlarning o'rtanchasi")
}else if ((c>a & c<b) || (c>b & c<a)){
  console.log("3 chi kiritilgan son bu sonlarning o'rtanchasi")
}else {
  console.log("Har xil qiymat bering")
}