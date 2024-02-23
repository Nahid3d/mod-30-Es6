// big number 
const max = Math.max(39,345,33,232,44,55,6);
const number =[34,45,33,22,44,6,66,77,7,7,7,5,4,3,]
const resutl =Math.max(...number)
// console.log(resutl)
// console.log(max)


// splat 
// case 1  push kortase num2 k but num 1 a o push auto hoytase 
const num = [34,32,45,66,];
const num2 = num ;
num2.push(100)
// console.log(num)

const freind = [12,25,36,45];
const bondhu =freind;
const dosto =[...freind];
console.log(dosto);
freind.push(200)
console.log(freind)
console.log(bondhu);

