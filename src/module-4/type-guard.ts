
// keyof guard 

type Alphanewmeric = string | number;

function add(param1: Alphanewmeric, param2: Alphanewmeric): Alphanewmeric {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    } else {
        return param1.toString() + param2.toString();
    }
}

add('a', 'r');
add(2, 4)


//in guard

type NormalUserType = {
    name: string
}

type AdminUserType = {
    name: string;
    role: 'admin'
}

function getUser(user: NormalUserType | AdminUserType): string {
    if ('role' in user) {
        return 'I am an admin';
    }
    else {
        return 'I am a normal user'
    }
}

const nomalUser1: NormalUserType = { name: 'Mr. X' };
const adminUser1: AdminUserType = { name: 'Mr. Y', role: 'admin' };

console.log(getUser(nomalUser1));
console.log(getUser(adminUser1));



// instaceof guard 

class Animal1 {
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log('I am making sound')
    }
}

class Dog1 extends Animal1 {
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeBark() {
        console.log('I am barking');
    }
}

class Cat1 extends Animal1 {
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeMeaw() {
        console.log('I am Meawing')
    }
}

//************************************************* */
// avabe o kora jay 
function isDog(animal: Animal1): animal is Dog1 {
    return animal instanceof Dog1
}
function isCat(animal: Animal1): animal is Cat1 {
    return animal instanceof Cat1
}

function getAnimal1(animal: Animal1) {
    if (isDog(animal)) {
        animal.makeBark()
    }
    else if (isCat(animal)) {
        animal.makeMeaw()
    }
    else {
        animal.makeSound()
    }
}
//************************************************* */

function getAnimal(animal: Animal1) {
    if (animal instanceof Dog1) {
        animal.makeBark()
    }
    else if (animal instanceof Cat1) {
        animal.makeMeaw()
    }
    else {
        animal.makeSound()
    }
}

const animal2 = new Dog1('German', 'dog')   //instance ---> dog
const animal3 = new Cat1('Persian', 'cat')   //instance ---> cat

getAnimal(animal3);

