// const eventFilterNames = (names) => {
//     return names.filter(name => name.length % 2 === 0);
// }
// const friendsNames =['rakib', 'mobbasir', 'sowrov' , 'sojib', 'tanim' ,'ect'];
// const eventName = eventFilterNames(friendsNames);
// console.log(eventName)


// double try now 

const friendsAllNames = (names) => {
    return names.filter(name => name.length % 2 === 0);
}
const friendsNames =['rakib', 'mobbasir', 'sowrov' , 'sojib', 'tanim' ,'ect','nahid'];
const newVariable = friendsAllNames(friendsNames);
console.log(newVariable)
