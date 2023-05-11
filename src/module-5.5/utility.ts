// Pick 

// interface Person2 {
//     name: string;
//     email?: string;
//     contactNo: string;
// }



// type Email = Pick<Person2, "email">
// type nameAndcon = Pick<Person2, "name" | "contactNo">

// Omit 

// type Name = Omit<Person2, "email" | "contactNo">




// partial
//to make all the properties be optional type

// interface Person2 {
//     name: string;
//     email?: string;
//     contactNo: string;
// }


// type Optional = Partial<Person2>



// required 
// to make all the properties required
// interface Person2 {
//     name: string;
//     email?: string;
//     contactNo: string;
// }


// type requiredProps = Required<Person2>





// type MyObj = {
//     a: string,
//     b: string,
//     c: string
// }

// using index signature 
// type MyObj = {
//     [key: string]: string
// }

// const obj: MyObj = {
//     a: '1',
//     b: '4'
// }



//Record type





// type MyObj = Record<string, string>
type MyObj = Record<'a' | 'b' | 'c', string>

const obj: MyObj = {
    a: '1',
    b: '4',
    c: '5'
}