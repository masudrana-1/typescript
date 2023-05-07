class Person5 {
    takeNap(): void {
        console.log('I am slepping 8 hours per day');
    }
}

class Student5 extends Person5 {
    takeNap(): void {
        console.log('I am slepping 10 hours per day');
    }
}

class Developer extends Person5 {
    takeNap(): void {
        console.log('I am slepping 5 hours per day');
    }
}

function getNap(param: Person5) {
    param.takeNap
}

const person10 = new Person5();
const person11 = new Student5();
const person12 = new Developer();

getNap(person10)
getNap(person11)
getNap(person12)



class Shape {
    getArea(): number {
        return 0;

    }
}

// area = pi * r * r 
class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

function getAreaOfShape(param: Shape) {
    console.log(param.getArea())
}

getAreaOfShape(new Circle(10))
getAreaOfShape(new Rectangle(10, 45))