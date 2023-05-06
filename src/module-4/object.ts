class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    // parameter properties 

    constructor(public name: string, public species: string, public sound: string) {
        //     this.name = name;
        //     this.species = species;
        //     this.sound = sound;
    }

    // method 
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`)
    }

}

const dog = new Animal('German', 'dog', 'ghew ghew');

dog.makeSound();