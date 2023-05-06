// let a : any;

// a= 'next level web development';

// (a as string).length

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted result is ${value} gram`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
};

const resulToBeNumber = <number>kgToGram(1000);
const resulToBeString = <string>kgToGram('1000');
