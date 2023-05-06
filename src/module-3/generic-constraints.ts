const addCrushMind = <T extends { name: string, age: number, salary: number }>(myInfo: T) => {
    const crush = 'natasha';
    const newData = { ...myInfo, crush };
    return newData;
}

type MyInfoType = {
    name: string;
    age: number;
    salary: number;
    married: boolean;

}

const myInfo = {
    name: 'masud',
    age: 24,
    salary: 234565,
    married: false
};

const crushMind = addCrushMind(myInfo);