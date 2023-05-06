// common gulo k niye alada class 
class Parent {

    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: number): string {
        return (`This ${this.name} will sleep for ${hours}`)
    }
}

class Student extends Parent {
    // name: string;
    // age: number;
    // address: string;

    constructor(name: string, age: number, address: string) {
        super(name, age, address);
        // this.name= name;
        // this.age= age;
        // this.address=address
    }

    // makeSleep(hours: number): string {
    //     return (`This ${this.name} will sleep for ${hours}`)
    // }
}



const student1 = new Student('Mr.x', 23, 'bd');
// Student1.



class Teacher extends Parent {

    designation: string

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;

    }

    // makeSleep(hours: number): string {
    //     return (`This ${this.name} will sleep for ${hours}`)
    // }

    takeClasses(numOFClass: number): string {
        return `This ${this.name} will take ${numOFClass} class`;
    }
}

const teacher1 = new Teacher('masud', 23, 'bd', 'head');
// teacher1.
