
//properties

interface Model<TData, TMethods> {
    data: TData,
    methods: TMethods
};

interface IUser2 {
    firstName: string;
    lastName: string;

};


// methods 
interface IMethods {
    fullName(): string
};

type model = Model<IUser2, IMethods>;

class User implements model {
    data: IUser2;
    methods: IMethods;

    constructor(firstName: string, lastName: string) {
        this.data = { firstName, lastName };
        this.methods = {
            fullName: () => `${firstName} ${lastName}`
        };
    }
};


const user1 = new User('Masud', 'Rana')
console.log(user1.methods.fullName());