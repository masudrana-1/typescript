

// union

// type NoobDeveloper = {
//     name: string
// };

// type JuniorDeveloper = {
//     name: string,
//     expertise: string,
//     experience: number
// };

// const newDeveloper: NoobDeveloper | JuniorDeveloper ={
//     name: 'masud'
// }

// const newDeveloper: NoobDeveloper | JuniorDeveloper = {
//     name: 'masud',
//     expertise: 'React',
//     experience: 1
// }




// intersection 

type NoobDeveloper = {
    name: string
};

type JuniorDeveloper = NoobDeveloper & {
    name: string,
    expertise: string,
    experience: number
};

// const newDeveloper: NoobDeveloper | JuniorDeveloper ={
//     name: 'masud'
// }

// const newDeveloper: NoobDeveloper | JuniorDeveloper = {
//     name: 'masud',
//     expertise: 'React',
//     experience: 1
// }

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number
};

const developer: NextLevelDeveloper = {
    name: 'rana',
    expertise: 'typescript',
    experience: 2,
    leadershipExperience: 1
};