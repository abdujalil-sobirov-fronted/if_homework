let a = Number(prompt("a ni kiriting"));
if (a>=10 & a<=99 & a%2==1) {
  console.log("ikki xonali toq son");
}else if (a>=10 & a<=99 & a%2==0) {
  console.log("ikki xonali juft son");
}else if (a>=100 & a%2==0) {
  console.log("uch xonali juft son");
}else if (a>=100 & a%2==1) {
  console.log("uch xonali toq son");
}else if (a==0){
  console.log("nolga teng");
}