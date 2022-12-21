// ------------------------------------ 1 Dalis ------------------------------------ 
// 1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:
// - name
// - surname
// - age
// - height
// - weight
// - sex
// 2. Panaudojant array.forEach:
// - Atspausdinti kiekvieną elementą
// - Atspausdinti kiekvieno elemento pilną vardą
// - Atspausdinti kiekvieno elemento kūno masės indeksą
// 3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:
// - kurių vardas ilgesnis nei 6 simboliai
// - kurių svoris didesnis nei 80kg
// - kurie aukštesni nei 185cm
// 4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti
// - ūgius
// - svorius
// - ūgius, svorius ir amžius : [{height, weight, age}, ...]
// - KMI indeksus
// - KMI indeksus ir amžius
// 5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
// - svorių vidurkį
// - ūgio vidurkį
// ------------------------------------ 2 Dalis ------------------------------------ 
// 0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:
//   Person klasėje:    
//   - sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
//   - sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm
// 1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg 
// 2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5
// 3. Atrinkti vaikus, su antsvoriu (KMI > 30)
// 4. Atrinkti pensininkus, su antsvoriu (KMI > 30)
// 5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]

// ------------------------------------ 3 Dalis -------------------------------------
// Peržiūrėti video: 
// https://www.youtube.com/watch?v=JaMCxVWtW58

// Geras Žaidimas pasitreniravimui:
// https://www.typing.com/student/game/tommyq

// Rekomenduoju pasikartoti greitasias komandas


const peopleData = [{
    name: 'Ieva',
    surname: 'Ievauskaitė',
    age: 24,
    height: 1.68,
    weight: 50,
    sex: "female",
}, {
    name: 'Nojus',
    surname: 'Kanpinis',
    age: 16,
    height: 1.86,
    weight: 89,
    sex: "male",
}, {
    name: 'Lukas',
    surname: 'Storinis',
    age: 39,
    height: 1.67,
    weight: 90,
    sex: "male",
}, {
    name: 'Barbora',
    surname: 'Kumpalaitė',
    age: 19,
    height: 1.70,
    weight: 80,
    sex: 'female'
}, {
    name: 'Austrana',
    surname: 'Iguan',
    age: 5,
    height: 1.10,
    weight: 21,
    sex: 'female',
}, {
    name: 'Matas',
    surname: 'Mtinis',
    age: 27,
    height: 1.80,
    weight: 60,
    sex: "male",
}, {
    name: 'Pukis',
    surname: 'Lapatinis',
    age: 39,
    height: 1.67,
    weight: 50,
    sex: "male",
}, {
    name: 'Seja',
    surname: 'Luuan',
    age: 14,
    height: 1.50,
    weight: 70,
    sex: 'female',
}, {
    name: 'Nerijus',
    surname: 'Kurka',
    age: 79,
    height: 1.67,
    weight: 85,
    sex: "male",
}, {
    name: 'Ona',
    surname: 'Maišinė',
    age: 66,
    height: 1.50,
    weight: 70,
    sex: 'female',
}];

class Person {
    name;
    surname;
    age;
    height;
    weight;
    sex;

    constructor({ name, surname, age, height, weight, sex }) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.sex = sex;
    }

    get BMI() {
        return this.weight / (this.height ** 2)
    }

    toString() {
        return `Person ${this.name} ${this.surname} is ${this.age}, height is ${this.height}, weight is ${this.weight}, sex is ${this.sex}.`;
    }
}

const people = peopleData.map(personData => new Person(personData));


console.groupCollapsed('1.2.');
people.forEach(person => console.log(person))

console.log("---------------------------------")

people.forEach(person => console.log(person.name, person.surname));

console.log("---------------------------------")

people.forEach(person => console.log(person.weight / (person.height ** 2)));

console.log("---------------------------------")

console.groupEnd();


console.groupCollapsed('1.3.')
const filterLongNames = people.filter(person => person.name.length > 6);
console.log(filterLongNames);

console.log("---------------------------------")

const heavyPeople = people.filter(person => person.weight > 80);
console.log(heavyPeople);

console.log("---------------------------------")

const tallPeople = people.filter(person => person.height > 1.85);
console.log(tallPeople);
console.groupEnd();

console.groupCollapsed('1.4.')

const peopleHeight = people.map(person => person.height);
console.log(peopleHeight);

console.log("---------------------------------")

const peopleWeight = people.map(person => person.weight);
console.log(peopleWeight);

console.log("---------------------------------")

const peopleHeightWeightAge = people.map(({ height, weight, age }) => ({ height, weight, age }));
console.table(peopleHeightWeightAge);

console.log("---------------------------------")

const peopleKMI = people.map(person => person.weight / (person.height ** 2));
console.log(peopleKMI);

console.log("---------------------------------")

const peopleKMIAndAge = people.map(({ weight, height, age }) => [weight / (height ** 2), age]);
console.log(peopleKMIAndAge);

console.groupEnd();


console.groupCollapsed('1.5.')

const weightSum = people.reduce((sum, pweight) => sum + pweight.weight, 0);
const weightAvg = weightSum / people.length;

console.log(weightAvg);

console.log("---------------------------------")

const heightSum = people.reduce((sum, pheight) => sum + pheight.height, 0);
const heightAvg = heightSum / people.length;
console.log(heightAvg)
console.groupEnd();


console.group('2.0.')
console.dir(Person);

people.forEach(person => console.log(person.BMI));
people.forEach(person => console.log(person.toString()));
console.groupEnd();

console.group('2.1.')

const femaleYounger20 = people.filter(({ sex, age, weight }) => sex === 'female' && age < 20 && weight > 70);
console.log(femaleYounger20);
console.groupEnd();

console.group('2.2.')

const maleBMILessThan18 = people.filter(({ sex, age, BMI }) => sex === 'male' && age > 25 && BMI < 18.5);
console.log(maleBMILessThan18);
console.groupEnd();

console.group('2.3.');
const childrenObese = people.filter(({ age, BMI }) => age <= 18 && BMI > 30);
console.log(childrenObese);
console.groupEnd();

console.group('2.4.');

const retiredAndObese = people.filter(({age, BMI}) => age > 64 && BMI > 30);
console.log(retiredAndObese);
console.groupEnd();

console.group('2.5.');

const whoBMIIsOutsided = people.filter(({BMI}) => BMI < 18.5 || BMI > 25);
console.log(whoBMIIsOutsided);
