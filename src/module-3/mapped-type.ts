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