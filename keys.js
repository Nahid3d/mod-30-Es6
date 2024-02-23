const student = {
    name : 'Nahid',
    roll : 668957,
    age  : 21,
    semester: '5th',
    year : 2024,
    sniggle: true,

}
delete student.sniggle;

console.log(student)
const key = Object.keys(student);
console.log(key)
const value = Object.values(student);
console.log(value)