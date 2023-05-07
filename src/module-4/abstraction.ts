// // interface 

// interface IVehicle{
//     name: string;
//     model: string
// }

// const vehicle: IVehicle={
//     name: 'car',
//     model: '23445'
// }


interface IVehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

class Vehicle implements IVehicle {


    constructor(
        public name: String,
        public brand: string,
        public model: number
    ) {

    }

    startEngine(): void {
        console.log('I am starting engine');
    }
    stopEngine(): void {
        console.log('I am stoping engine');
    }
    move(): void {
        console.log('I am moving engine');
    }

    test() {
        console.log('I am for testing purpose')
    }
}


const vehicle1 = new Vehicle('car', 'toyota', 3454)