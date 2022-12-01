const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];

const numbers = [1, 15, 9, -9, -8, -7, 2, 8, 51, 6, 5];

console.groupCollapsed('1. Sukurkite funkciją kuri performuotų asmens objektą į vardo ir pavardės string`ą. Panaudokite Array.prototype.map, kad sukurti naują masyvą panaudojant šią funkciją.');
{
function transformPersonFullName(person){
  return `${person.name}  ${person.surname}`;
}

const fullNames = people.map(transformPersonFullName);
console.table(fullNames);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją kuri performuotų asmens objektą į amžių. Panaudokite Array.prototype.map, kad sukurti naują masyvą panaudojant šią funkciją.');
{
function transformPersonAge(person){
  return person.age;
}
const age = people.map(transformPersonAge);
console.table(age);
}
console.groupEnd();

console.groupCollapsed('3. Sukurkite funkciją kuri padalintų skaičių iš 4. Panaudokite Array.prototype.map, kad sukurti naują masyvą panaudojant šią funkciją.');
{
function divideNumbers(number){
  return number / 4;
}
const divideNum = numbers.map(divideNumbers);
console.log(divideNum);
}
console.groupEnd();


