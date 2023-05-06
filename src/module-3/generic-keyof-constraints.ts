type Person = {
    name: string;
    age: number;
    address: string
};

// type NewType = 'name' | 'age' | 'address' //manully korci

type NewTypeUsingKeyOf = keyof Person






function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    return obj[key];
}

const property = getProperty({ name: 'masud', age: 111 }, 'age');