let a = Number(prompt("5 xonali son kiriting"));
let b = Math.floor(a/10000);
let c = a%10000;
let d = c%1000;
let e = d%100;
let f = e%10;
let g = Math.floor(c/1000);
let h = Math.floor(d/100);
let i = Math.floor(e/10);
if (b>e && b>g && b>h && b>i) {
  console.log(`${b} 1`)
}else if (g>b && g>h && g>i && g>e) {
  console.log(`${g} 2`)
}else if (h>b && h>g && h>i && h>e) {
  console.log(`${h} 3`)
}else if (i>b && i>g && i>h && i>e) {
  console.log(`${i} 4`)
}else if (e>b && e>g && e>h && e>i) {
  console.log(`${e} 5`)
}else {
  console.log("Bir xil raqam kiritmang");
}