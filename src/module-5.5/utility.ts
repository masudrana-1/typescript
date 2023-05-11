// Pick 

interface Person2 {
    name: string;
    email?: string;
    contactNo: string;
}



// type Email = Pick<Person2, "email">
type nameAndcon = Pick<Person2, "name" | "contactNo">

// Omit 

type Name = Omit<Person2, "email" | "contactNo">


// partial
//to make all the properties be optional type