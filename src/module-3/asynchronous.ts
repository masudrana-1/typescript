const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'Data is fetched';
        if (data) {
            resolve(data);
        } else {
            reject('Fail to fetched data');
        }
    });
}

const getPromiseData = async (): Promise<string> => {
    const data = await makePromise();
    return data
}


const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = false;
        if (data) {
            resolve(data);
        } else {
            reject('Fail to fetched data');
        }
    });
}

const getPromiseDataBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean();
    return data
}


// object 


type DataType = {
    data: string
}

const makePromiseObject = (): Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = { data: 'Data is fetched' };
        if (data) {
            resolve(data);
        } else {
            reject('Fail to fetched data');
        }
    });
}

const getPromiseDataObject = async (): Promise<DataType> => {
    const data = await makePromiseObject();
    return data
}


// JSON placeholder 

interface JsonInterface {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getJsonData = async (): Promise<JsonInterface> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
}

const getJsonData2 = async (): Promise<void> => {
    const result7 = await getJsonData();
    console.log(result7);
}

getJsonData();