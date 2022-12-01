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

// Kiekvienai užduočiai padeklaruokite funkciją, kurią panaudosite kviesdami metodą Array.prototype.filter
console.groupCollapsed('1. Atrinkti neigiamus skaičius');
{
  function filterNegative(number) {
    return number < 0;
  }
  const numNegative = numbers.filter(filterNegative);
  console.log(numNegative);
}
console.groupEnd();

console.groupCollapsed('2. Atrinkti nelyginius skaičius');
{
  function filterOdd(number) {
    return number % 2 === 1;
  }
  const numOdd = numbers.filter(filterOdd);
  console.log(numOdd);
}
console.groupEnd();

console.group('3. Atrinkti žmones kurių vardas ilgesnis nei 6 raidės');
{
  function filterLongNames(names) {
    return names.name.length > 6;
  }
  const longNames = people.filter(filterLongNames);
  console.log(longNames)
}
console.groupEnd();

console.group('4. Atrinkti žmones kurie turi mašiną');
{
  function filterCarOwners(owners){
return owners.hasCar === true;
  }
  const ownerCar = people.filter(filterCarOwners);
  console.log(ownerCar);
}
console.groupEnd();
