
// nullable

const searchName = (value: string | null) => {
    if (value === null) {
        console.log('There is nothing to search');
    }
    else {
        console.log('Searching');
    }
};

// searchName('masud');
// searchName(null);


// unknown 

const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;  //km theke meter a convert 
        console.log(`My car speed is ${convertedSpeed}`);
    }
    if (typeof speed === 'string') {
        const [value, unit] = speed.split(' ');  //['10', 'kmh^-1'] 1st er ta value, porer ta unit
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My car speed is ${convertedSpeed}`);
    }
    else {
        console.log('This is wrong types')
    }
};

// getMyCarSpeed(10);
getMyCarSpeed('10 kmh^-1');
// getMyCarSpeed(true);


// never 

function throwError(message: string): never {
    throw new Error(message);
};

// throwError('Bro error hoyece');


