class BankAccount {
    readonly id: number;
    protected name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance
    }

    // getter 
    get balance(): number {
        return this._balance
    }

    // getBalance(): number {
    //     // console.log(`My current balance is ${this._balance}`)
    //     return this._balance
    // }

    // setter 
    set deposit(amount: number) {
        this._balance = this._balance + amount;
    }

    // addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    // }
}


// class StudentAccount extends BankAccount {
//     test() {
//         this.
//     }
// }

const myAccount = new BankAccount(234, 'masud', 466767)

// myAccount.addDeposit(23);
// myAccount.getBalance();

// console.log(myAccount.getBalance())
console.log(myAccount.balance)
myAccount.deposit = 34
console.log(myAccount.balance);