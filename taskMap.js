// const averageSquare = (arr) => {
//     const averageElement = arr.map(current => current ** 2);
//     const averageSum = averageElement.reduce((sum, current) => sum + current, 0);
//     return averageSum / arr.length;
// }
// const numbers = [1,2,5,4];
// const result = averageSquare(numbers);
// console.log(result)


// repute 
const averageElement = (array) => {
    const elements =array.map(current => current ** 2)
    const sum = elements.reduce((sum , current) => sum + current, 0)
    return sum / array.length;
}
const number =[1,2,5,4];
const result = averageElement(number);
console.log(result);
