// ternary operator

const age = 22;

// if (age >= 18) {
//     console.log('Yes');
// }
// else {
//     console.log('No');
// }

const isAdult = age >= 18 ? 'Yes' : 'No';
// console.log(isAdult)

// nullish coalescing operator 
// null and undefined 

const isAuthenticatedUser = null;
const userName = isAuthenticatedUser ?? 'Guest';

// console.log(userName);



type manush = {
    name: string,
    age: number,
    address: {
        city: 'No city',
        road: 'No road',
        home?: ''
    }
};

const manush1: manush = {
    name: 'masud',
    age: 24,
    address: {
        city: 'No city',
        road: 'No road'
    }
};

const home = manush1?.address?.home ?? "No home" // default 'No home'
console.log(home);