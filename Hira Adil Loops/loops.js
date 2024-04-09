// const number = 7
// for (let i = 1; i < 11; i++){
//     console.log(`${number} * ${i} = ${number * i}`)
// }
// ---------------------------------------------------------------------------------------------
// const myWork = [];
// for (let i = 1; i < 11; i++) {
//     let status = 1 % 2 ? true : false;
//     let temporaryArray = {
//         name : `Lesson ${1}`,
//         status : status
//     }
//    myWork.push(temporaryArray)
// }
// console.log(myWork)
// -------------------------------------------------------------------------------------------------
// const products = ["shirts", "trousers", "jackets"];
// const gifts = ["pen", "keychain", "tie"]
// for (let i = 0; i < products.length; i++) {
//     for (let j = 0; j < gifts.length; j++) {
//         console.log(`${products[i]} - ${gifts[j]}`)   
//     } 
// }
// -------------------------------------------------------------------------------------------------------
const multiplicationTable = [];
const numValue = 5;
for (let i = 0; i < numValue; i++) {
    const temporary = [];
    console.log(temporary);
    for (let j = 0; j < numValue; j++) {
        temporary.push(i * j);
    }
    multiplicationTable.push(temporary);
}
console.table(multiplicationTable);
export {};
