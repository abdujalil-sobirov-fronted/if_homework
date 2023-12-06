let a = Number(prompt("a sonini kiritin"));
let b = Number(prompt("b sonini kiritin"));
let c = Number(prompt("c sonini kiritin"));
if (a<b & a<c) {
  console.log(`1 chi kiritilgan soni kiritilgan sonlar ichida eng kichigi`)
}else if (b<a & b<c) {
  console.log(`2 chi kiritilgan son kiritilgan sonlar ichida eng kichigi`)
}else if (c<b & c<a) {
  console.log(`3 chi kiritilgan son kiritilgan sonlar ichida eng kichigi`)
}else if (a==b & b==c & a==c) {
  console.log("Barchasi bir biriga teng")
}else {
  console.log("No'to'g'ri qiymat berdingiz");
}
