const arrayOfNumber = [1, 3, 4];

const arrayOfString = arrayOfNumber.map(num => num.toString());

console.log(arrayOfString);

//**************************************************************** */

type Volume = {
    height: number;
    width: number;
    depth: number;
}





type Area = {
    [key in keyof Volume]: string
}

// generic 


// type Area2<T> = {
//     [key in keyof Volume]: string
//     [key in keyof Volume]: Volume[key]
//     [key in keyof T]: T[key]
// }

type Area2<T> = {
    // [key in keyof Volume]: string
    // [key in keyof Volume]: Volume[key]
    readonly [key in keyof T]: T[key]
}

const area3: Area2<{ name: string, age: number }> = { name: 'masud', age: 23 }