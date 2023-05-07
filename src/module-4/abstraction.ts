// // interface 


// interface IVehicle {
//     startEngine(): void;
//     stopEngine(): void;
//     move(): void;
// }

// class Vehicle implements IVehicle {


//     constructor(
//         public name: String,
//         public brand: string,
//         public model: number
//     ) {

//     }

//     startEngine(): void {
//         console.log('I am starting engine');
//     }
//     stopEngine(): void {
//         console.log('I am stoping engine');
//     }
//     move(): void {
//         console.log('I am moving engine');
//     }

//     test() {
//         console.log('I am for testing purpose')
//     }
// }


// const vehicle1 = new Vehicle('car', 'toyota', 3454)


// abstract 

abstract class Vehicle4 {

    constructor(
        public name: String,
        public brand: string,
        public model: number
    ) {

    }

    abstract startEngine(): void
    abstract stopEngine(): void
    move(): void {
        console.log('I am moving engine');
    }
}

class Car extends Vehicle4 {
    startEngine(): void {
        console.log('I am starting engine');
    }
    stopEngine(): void {
        console.log('I am stoping engine');
    }
}

// const car2 = new Vehicle4('car', 'honda', 34544);