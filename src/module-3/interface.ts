// type user = {
//     name: string,
//     age: number
// };

interface IUser {
    name: string,
    age: number
};

interface IExtendedUser extends IUser {
    role: string
}


const users: IExtendedUser = {
    name: 'masud',
    age: 23,
    role: 'developer'
}


// alis
type addNumber = (num1: number, num2: number) => number;

const addNumbers: addNumber = (num1, num2) => num1 + num2;


// interface
interface IAddNum {
    (num1: number, num2: number): number;
}

const addNum: IAddNum = (num1, num2) => num1 + num2;


// array 
// alis 
type rollNumType = number[];

const rollNum: rollNumType = [1, 3, 4, 6, 7];


// interface 
interface IRollNum {
    // index signature
    [index: number]: number
}

const rollNums: IRollNum = [1, 3, 4, 6, 7];