let x = Number(prompt("x ni kiriting"));
let y = Number(prompt("y ni kiriting"));
if (x>0 & y>0){
  console.log("1-chorak");
}else if (x>0 & y<0){
  console.log("4-chorak");
}else if (x<0 & y>0){
  console.log("2-chorak");
}else if (x<0 & y<0){
  console.log("3-chorak");
}else if (x==y){
  console.log("Kordinata boshidan o'tadi");
}else if (x!=0 & y==0){
  console.log("OX o'qida yotadi");
}else{
  console.log("OY o'qida yotadi");
}