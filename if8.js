let a = Number(prompt("a ni kiriting"));
let b = Number(prompt("b ni kiriting"));
let c = Number(prompt("c ni kiriting"));
if(a<=0 || b<=0 || c<=0){
  console.log("Uchburchak tomoni manfiy bo'lishi yoki 0 ga teng bo'lishi mumkin emas");
}else if(a+b>c & a+c>b & b+c>a){
  console.log("YES")
}else{
  console.log("NO");
}