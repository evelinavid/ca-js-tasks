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
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  function printNameSurname(person) {
    console.log(person.name, person.surname);;
  }
  people.forEach(printNameSurname);
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių vardus ir pavardes, atskirtus brūkšneliu');
{
  function printNameSurnameWithSymbol(person) {
    console.log(`${person.name} - ${person.surname}`);
  }
  people.forEach(printNameSurnameWithSymbol);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  function printNameSurnameWithMaritalStatus(person) {
    console.table(`${person.name} ${person.surname}, marital status: ${person.married}`);
  }
  people.forEach(printNameSurnameWithMaritalStatus);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  function personSexIncome(person) {
    return (`${person.sex}: ${person.income}`)
  }

  const sexIncome = people.map(personSexIncome);
  console.log(sexIncome);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  function personNameSurnameSex(person) {
    return (`${person.name} ${person.surname} : ${person.sex}`)
  }
  const personNSS = people.map(personNameSurnameSex);
  console.log(personNSS);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  function printAllMale(person) {
    return person.sex === 'male';
  }
  const allMale = people.filter(printAllMale);
  console.log(allMale);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  function printAllFemale(person) {
    return person.sex === 'female';
  }
  const allFemale = people.filter(printAllFemale);
  console.log(allFemale);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  function printNameSurnameWhoHasCar(person) {
    return person.hasCar === true;
  }
  const hasCar = people.filter(printNameSurnameWhoHasCar);
  console.log(hasCar);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  function justMariedStatus(person) {
    return person.married === true;
  }
  const marriedTrue = people.filter(justMariedStatus);
  console.log(marriedTrue);
}
console.groupEnd();

console.group('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  function filterDrivingMale(person) {
    return person.sex === 'male' && person.hasCar === true;
  };
  const a = people.filter(filterDrivingMale);


  function countDrivingMales(prevSum, person) {
    // console.log(person, prevSum)
    return prevSum + parseFloat(person.a);
  }
  const x = people.reduce(countDrivingMales, 0)
  console.log(x);

  // function filterDrivingFemale(person){
  //   return person.sex === 'female' || person.hasCar === true;
  // }

}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  function changeInSalary(person) {
    return {
      name: person.name,
      surname: person.surname,
      sex: person.sex,
      age: person.age,
      salary: person.income,
      married: person.married,
      hasCar: person.hasCar
    }
  }
  const madeChanges = people.map(changeInSalary);
  console.table(madeChanges)
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
  function anonymousPersons(person) {
    return {
      sex: person.sex,
      age: person.age,
      income: person.income,
      married: person.married,
      hasCar: person.hasCar,
    }
  }
  const findAnonymous = people.map(anonymousPersons);
  console.log(findAnonymous);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  function changeIntoFullName(person) {
    return {
      fullname: person.name + " " + person.surname,
      sex: person.sex,
      income: person.income,
      married: person.married,
      hasCar: person.hasCar,
    }
  }
  const changeFullName = people.map(changeIntoFullName);
  console.log(changeFullName);
}
console.groupEnd();

