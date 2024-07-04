interface Addres {
    city: string;
    coutry: string;
}

interface Uder {
    name: string;
    age: number;
    email: string;
    address?: AutoFillAddressKind;
}

const mango = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};