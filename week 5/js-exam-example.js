// 1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių:
//   brand,
//   model,
//   year,
//   color,
//   fuelTypes: []
//   price // eurais

// 2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų

// 3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes)
//    kaip 'string'ą atskirtą '/'.

// 4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą, pvz:
//   Tayota Corola - dysel/electric
//   Nisan Bajam - petrol/gas
//   Kanagi BaBa - uranus
//             ...

// 5. Atrinkite tik elektrinius automobilius

// 6. Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai

// 7. Atrinkite audi tipo automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai

// 8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį

// 9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę

// 10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą:
// * brand,
//* model,
//* price, // kaina doleriais [Number]
// * fuelType // kuro tipas kaip string'as. galite naudoti 3 punktu sukurtą metodą


const carsData = [{
    brand: 'Tesla',
    model: 'Model S',
    year: 2012,
    color: 'red',
    fuelTypes: ['electric'],
    price: 45000,
}, {
    brand: 'Audi',
    model: 'A6',
    year: 2014,
    color: 'black',
    fuelTypes: ['dysel', 'electric'],
    price: 16000,
}, {
    brand: 'audi',
    model: 'A5',
    year: 2014,
    color: 'black',
    fuelTypes: ['petrol'],
    price: 16000,
}, {
    brand: 'BMW',
    model: 'X5',
    year: 2017,
    color: 'black',
    fuelTypes: ['electric', 'petrol'],
    price: 16000,
}, {
    brand: 'Subaru',
    model: 'Impreza',
    year: 2019,
    color: 'black',
    fuelTypes: ['petrol'],
    price: 16000,
}, {
    brand: 'Audi',
    model: 'A7',
    year: 2015,
    color: 'black',
    fuelTypes: ['petrol'],
    price: 12000,
}, {
    brand: 'BMW',
    model: 'X5',
    year: 2017,
    color: 'black',
    fuelTypes: ['dysel'],
    price: 16000,
}, {
    brand: 'Toyota',
    model: 'Prius',
    year: 2008,
    color: 'grey',
    fuelTypes: ['gas', 'petrol', 'electric'],
    price: 5000,
}];

class Car {
    brand;
    model;
    year;
    color;
    fuelTypes;
    price;

    constructor({
        brand,
        model,
        year,
        color,
        fuelTypes,
        price,
    }) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.fuelTypes = fuelTypes;
        this.price = price;
    }

    getfuelTypes() {
        return this.fuelTypes.join(' or ');
    }
}

let cars, electricCars, petrolCars;

console.group('//1.')

console.dir(Car);
console.log(new Car({
    brand: 'Toyota',
    model: 'Prius',
    year: 2008,
    color: 'grey',
    fuelTypes: ['gas', 'petrol', 'electric'],
    price: 5000,
}));
console.groupEnd();

console.group('//2.')

cars = carsData.map(carData => new Car(carData));
console.log(cars);

console.groupEnd();

console.group('//3.')

cars.forEach(car => console.log(car.getfuelTypes()));

console.groupEnd();

console.group('//4.')

cars.forEach(car => console.log(`${car.brand} ${car.model} - ${car.getfuelTypes()}`));

console.groupEnd();

console.group('//5.')

electricCars = cars.filter(car => car.fuelTypes.includes('electric'));
console.log(electricCars);

console.groupEnd();

console.group('//6.')

petrolCars = cars.filter(car => car.fuelTypes.includes('petrol') &&
    car.year > 2016);
console.log(petrolCars);

console.groupEnd();

console.group('//7.')

const newAndNotDieselAudi = cars.filter(car => car.brand.toLowerCase() === 'audi' && !car.fuelTypes.includes('dysel') &&
    car.year > 2012 &&
    car.year < 2016);
console.log(newAndNotDieselAudi);

console.groupEnd();

console.group('//8.')

const fifthPrice = electricCars.reduce((sum, { price }) => sum + price, 0);
const fifthPriceAvg = fifthPrice / electricCars.length;
console.log(fifthPriceAvg + ' EUR');

console.groupEnd();

console.group('//9.')

const sixthPrice = petrolCars.reduce((sum, { price }) => sum + price, 0);
console.log(sixthPrice + ' EUR');

console.groupEnd();

console.group('//10.')

const EURUSD = 1.06;

const change = cars.map(car =>
({
    brand: car.brand,
    model: car.model,
    price: car.price * EURUSD + " " + 'USD',
    fuelTypes: car.getfuelTypes(),
})
)

console.log(change);

console.groupEnd();
