let a = Number(prompt("a sonini kiriting"));
if(a<=9999 && a>=1000){
  let b = Math.floor(a/1000);
  let c = a%1000;
  let d = Math.floor(c/100);
  let e = c%100;
  let f = Math.floor(e/10);
  let g = e%10;
  console.log(b+f);
}else if (a>=100 && a<=999) {
  let h = Math.floor(a/100);
  let j = a%100;
  let k = Math.floor(j/10);
  let l = j%10;
  console.log(h+l);
}else if (a>=10 && a<=99) {
  let m = Math.floor(a/10);
  let n = a%10;
  console.log(m);
}else if (a>=1 && a<=9) {
  console.log(a);
}else {
  console.log("0 < n < 10 000 oralig'ida son kiriting");
}