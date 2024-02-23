// const findTheArrayCombine = (array1 , array2) => {
//     const combineArray =[...array1 ,...array2]
//     const maxNumber = Math.max(...combineArray);
//     return maxNumber;
// }
// const array1 =[22,33,44];
// const array2 =[33,44322,5];
// const result = findTheArrayCombine(array1 ,array2)
// console.log(result)




// agin

const findAnArrayTheMaxNumber = (array1, array2) => {
    const combineArray =[...array1, ...array2];
    const maxNumber = Math.max(...combineArray);
    return maxNumber;
}
const array1 =[25,147,85,693,2,5,8,6,5,458,415,565665]; 
const array2 =[245,54,69,874,566,12564];
const result =findAnArrayTheMaxNumber(array1, array2);
console.log(result)