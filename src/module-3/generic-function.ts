// arrow function 
const createArray = (param: string): string[] => {
    return [param];
}


// generic function 
const createArray1 = <T>(param: T): T[] => {
    return [param];
}

const result = createArray1<string>('masud');
const result2 = createArray1<number>(234354);
const result3 = createArray1<boolean>(true);

const result4 = createArray1<{ name: string }>({ name: 'bangladesh' });


// generic function 
const createArray4 = <x, y>(param1: x, param2: y): [x, y] => {
    return [param1, param2];
}

const result5 = createArray4<string, string>('masud', 'natasha');



// spread operator generic interface
// const addCrushMind = <T>(myInfo: T) => {
//     const crush = 'natasha';
//     const newData = { ...myInfo, crush };
//     return newData;
// }

// const myInfo = {
//     name: 'masud',
//     age: 24,
//     salary: 234565
// };

// const crushMind = addCrushMind(myInfo);
