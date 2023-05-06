
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