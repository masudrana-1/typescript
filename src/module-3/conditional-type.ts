type a1 = number;
type a2 = undefined;
type a3 = number;

type a4 = a1 extends string ? string : null;

// nested conditional type 

type a5 = a1 extends null ? null : a2 extends number ? number : a3 extends null ? null : never;


//************************************************************************************** */

type Sheikh = {
    wife1: string;
    wife2: string;
}

// check korte hobe sheikh er moddhe wife1 ace ki na 

// type CheckProperty<T> = T extends { wife1: string } ? true : false;

type CheckProperty<T, W> = W extends keyof Sheikh ? true : false;



type CheckWife1 = CheckProperty<Sheikh, 'wife1'>;


//****************************************************************************************** */
// manual 

// type Bandhobi = 'nishi' | 'Ripu' | 'Aivy';

// type RemoveBanhobi<T> = T extends 'Ripu' ? never : T;

// type CurrentBandhobi = RemoveBanhobi<Bandhobi>


// dynamic 

type Bandhobi = 'nishi' | 'Ripu' | 'Aivy';

type RemoveBanhobi<T, k> = T extends k ? never : T;

type CurrentBandhobi = RemoveBanhobi<Bandhobi, 'Aivy'>

