// function coffeeOrder () {
//     console.log("your order is on the way")
// }
// coffeeOrder()
// -------------------------
// function coffeeOrder () {
//     return "your order is on the way!"
// };
// console.log(coffeeOrder())
//----------------------------------------------------------------------------------------
// function coffeeOrder () {
//     return "your order is on the way!"
// };
// const order = coffeeOrder();
// console.log(order)
//-------------------------------------------------------------------------------
// function coffeeOrder (drink: string) {
//     return `your ${drink} is on the way!`
// };
// const order = coffeeOrder("coffee");
// console.log(order)
//------------------------------------------------------------------------------------
// const value1 = 1;
// const value2 = 2;
// let operator = "-";
// function calculator(a:number, b: number, c:any) {
//     if (c=== "-") {
//         console.log(a-b);
//     } else {
//         console.log(a + b)
//     }
// }
// calculator(value1, value2, operator)
//--------------------------------------------------------------------------------------------
const array = [];
for (let i = 0; i < 10; i++) {
    let value1 = i * 5;
    let value2 = i * i;
    let result = calculator(value1, value2, "+");
    array.push(result);
}
console.log(array);
function calculator(a, b, c) {
    if (c === "-") {
        return (a - b);
    }
    else {
        return (a + b);
    }
}
export {};
