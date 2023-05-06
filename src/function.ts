// normal function

function add(num1: number, num2: number): number {
    return (num1 + num2);
}

add(2, 4);

// arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2;

// callback function

const arr = [2, 5, 8, 9];
const newArr = arr.map((elem: number) => elem * elem);


// const person: {
//     name: string,
//     balance: number,
//     addBalance(money: number): number
// } = {
//     name: 'masud',
//     balance: 34567,
//     addBalance(money: number) {
//         return (this.balance + money);
//     }
// };
const person: {
    name: string,
    balance: number,
    addBalance(money: number): void
} = {
    name: 'masud',
    balance: 34567,
    addBalance(money: number) {
        // console.log(`My new balance is $(this.balance + money)`);
    }
};

// default parameter

function added(num1: number, num2: number = 33): number {
    return (num1 + num2);
}

added(2);

// spread operator

const fnds = ['sakib', 'masum', 'rose'];

const newFnds = ['nishi', 'ripu'];

fnds.push(...newFnds);

// console.log(fnds);

// rest operator 
// const greetFriends = (fnd1: string, fnd2: string, fnd3: string): void => console.log(`Hi ${fnd1} \n Hi ${fnd2} \n Hi ${fnd3}`);
// const greetFriends = (...friends: string[]): void => friends.forEach(friend => console.log(`Hi ${friend}`));

// greetFriends('masud', 'mahbul', 'Ripu', 'cook');

const t = {
    s: 'masud',
    r: 'rana'
}

// const {s:string}= t;

const { s } = t;