let temp = Number(prompt("Temperatura ni kiriting"));
if(temp<=0){
  console.log("Freezing");
}else if(1<=temp & temp<=10){
  console.log("Very Cold");
}else if(11<=temp & temp<=20){
  console.log("Cold");
}else if(temp>=21 & temp<=30){
  console.log("Normal");
}else if(temp>=31 & temp<=40){
  console.log("Hot");
}else{
  console.log("Very Hot");
}