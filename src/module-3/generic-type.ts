// // const ageNumbers: number[] = [23,45,23];
// // const ageNumbers2: string[] = ['45','56', '76'];


// // const ageNumbers: Array<number> = [23, 45, 23];
// // const ageNumbers2: Array<string> = ['45', '56', '76'];


// // const userAndRollNum: Array<{ name: string, roll: number }> = [{
// //     name: 'masud',
// //     roll: 23
// // },
// // {
// //     name: 'rana',
// //     roll: 45
// // }];


// type GenericArray<T> = Array<T>;

// const ageNumbers: GenericArray<number> = [23, 45, 23];
// const ageNumbers2: GenericArray<string> = ['45', '56', '76'];

// type NameRollType = { name: string, roll: number };

// const userAndRollNum: GenericArray<NameRollType> = [{
//     name: 'masud',
//     roll: 23
// },
// {
//     name: 'rana',
//     roll: 45
// }];

// type GenericTuple<x, y> = [x, y];

// const relation: GenericTuple<string, string> = ['masud', 'natasha'];

// // type relationWithSalaryType = {
// //     name: string, salary: number
// // }

// interface relationWithSalaryInterface {
//     name: string,
//     salary: number
// }

// const relationWithSalary: GenericTuple<relationWithSalaryInterface, string> = [
//     {
//         name: 'masud',
//         salary: 12454657
//     },
//     'natasha'
// ]

