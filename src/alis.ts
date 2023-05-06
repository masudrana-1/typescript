// const crush1:{
//     name: string,
//     age?: number,
//     profession: string,
//     address: string
// }={
//     name: 'Jaan',
//     age: 22,
//     profession: 'web developer',
//     address: 'bd'
// };

// const crush2:{
//     name: string,
//     age?: number,
//     profession: string,
//     address: string
// }={
//     name: 'sweetheart',
//     age: 20,
//     profession: 'MERN developer',
//     address: 'bd'
// };

type CrushType = {
    name: string,
    age?: number,
    profession: string,
    address: string
}

const crush1: CrushType = {
    name: 'Jaan',
    age: 22,
    profession: 'web developer',
    address: 'bd'
};

const crush2: CrushType = {
    name: 'sweetheart',
    age: 20,
    profession: 'MERN developer',
    address: 'bd'
};


// function alis

// const calculate = (
//     number1: number,
//     number2: number,
//     operation: (x: number, y: number) => number
// ) => {
//     return operation(number1, number2);
// };

// calculate(10, 40, (x, y) => x + y);
// calculate(10, 40, (x, y) => x - y);
// calculate(10, 40, (x, y) => x * y);
// calculate(10, 40, (x, y) => x / y);



type OperationType = (x: number, y: number) => number;

const calculate = (
    number1: number, //10
    number2: number, //40
    operation: OperationType //(x,y)=> x+y   (10,40)=> 10+40 
) => {
    return operation(number1, number2);
};

calculate(10, 40, (x, y) => x + y);
calculate(10, 40, (x, y) => x - y);
calculate(10, 40, (x, y) => x * y);
calculate(10, 40, (x, y) => x / y);