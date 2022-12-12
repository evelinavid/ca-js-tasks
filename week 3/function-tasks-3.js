console.groupCollapsed("1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis");
{
  // Funkcijos deklaravimas
  function printCapital(str) {
    console.log(str.toUpperCase());
  }
  console.log('---');
  console.log("abcd");
  printCapital("abcd");
  console.log("AAAA");
  printCapital("AAAA");
  console.log("aBcD");
  printCapital("aBcD");
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("2. Sukurkite funkciją, kuri atspausdina tekstą mažosiomis raidėmis");
{
  // Funkcijos deklaravimas
  function printLower(str) {
    console.log(str.toLowerCase());
  }
  console.log('---');
  console.log("ABCD");
  printLower("abcd");
  console.log("AAAA");
  printLower("AAAA");
  console.log("aBcD");
  printLower("aBcD");
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("3. Sukurkite funkciją, kuri atspausdina pirmojo parametro pirmają raidę");
{
  // Funkcijos deklaravimas
  function printFirstLetter(str) {
    console.log(str[0]);
  }
  console.log('---');
  console.log("ABCD");
  printFirstLetter("abcd");
  console.log("AAAA");
  printFirstLetter("AAAA");
  console.log("aBcD");
  printFirstLetter("aBcD");
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("4. Sukurkite funkciją, kuri atspausdina pirmojo parametro paskutinę raidę");
{
  // Funkcijos deklaravimas
  function printLastLetter(str) {
    console.log(str[str.length - 1]);
  }
  console.log('---');
  printLastLetter('Labas');
  printLastLetter('Ate');
  printLastLetter('Brieda');
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("5. Sukurkite funkciją, kuri atspausdina pirmojo parametro viduriniają raidę");
{
  // Funkcijos deklaravimas
  function printMiddleLetter(str) {
    const half = str.length / 2;
    // console.log(half);
    const remainder = half % 1;
    // console.log(remainder);
    console.log(str[half - remainder]);
  }
  console.log('---');
  printMiddleLetter('Labas'); // half = 2.5; remainder = 1;
  printMiddleLetter('Ate'); // half = 1.5; remainder = 1;
  printMiddleLetter('Brieda'); // half = 3; remainder = 0;
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("6. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių");
{
  function getLetterCount(str) {
    return str.length;
  }
  console.log('---');
  console.log({
    'labas': getLetterCount('labas'),
    'kranas': getLetterCount('kranas'),
    'kebabas': getLetterCount('kebabas'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("7. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių padaugintą iš dviejų");
{
  function getLetterCount(str) {
    return str.length * 2;
  }
  console.log('---');
  console.log({
    'labas': getLetterCount('labas'),
    'kranas': getLetterCount('kranas'),
    'kebabas': getLetterCount('kebabas'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("8. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių");
{
  function getArgsLetterSum(a, b) {
    return a.length + b.length;
  }
  console.log('---');
  console.log({
    'labas, abc': getArgsLetterSum('labas', 'abc'),
    'kranas, jonas': getArgsLetterSum('kranas', 'jonas'),
    'kebabas, kefyras': getArgsLetterSum('kebabas', 'kefyras'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("9. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 'a' raidė, priešingu atveju <false>");
{
  const containsLetterA = str => str.includes('a');

  console.log('---');
  console.log({
    'labas': containsLetterA('labas'),
    'kempė': containsLetterA('kempė'),
    'Finakolė': containsLetterA('Finakolė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("10. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false");
{
  const containsLetter = ((str, letter) => str.includes(letter));
  console.log('---');
  console.log({
    'labas, a': containsLetter('labas', 'a'),
    'kempė, a': containsLetter('kempė', 'a'),
    'Finakolė, u': containsLetter('Finakolė', 'u'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("11. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių");
{
  function isEvenNumberOfLetters(str) {
    return str.length % 2 === 0;
  }
  console.log('---');
  console.log({
    'labas': isEvenNumberOfLetters('labas'),
    'kempės': isEvenNumberOfLetters('kempės'),
    '123123': isEvenNumberOfLetters('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje");
{
  function getNumberOfVowels(str) {
    const vowels = (['a', 'e', 'i', 'u', 'ė', 'ų', 'į', 'ū', 'y', 'ę', 'ą', 'o']);
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      if (vowels.includes(letter)) {
        count += 1;
      }
    }
    return count;
  }

  console.log('---');
  console.log({
    'aaaaa': getNumberOfVowels('aaaaa'),
    'sasasasa': getNumberOfVowels('sasasasa'),
    'aeyuioąčė': getNumberOfVowels('aeyuioąčė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("13. Sukurkite funkciją, kuri grąžina priebalsių kiekį žodyje");
{
  function getNumberOfConsonants(str) {
    const consonants = (['b', 'c', 'č', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 'š', 't', 'v', 'z', 'ž'])
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      if (consonants.includes(letter)) {
        count += 1
      }
    }
    return count;
  }
  console.log('---');
  console.log({
    'aaaaa': getNumberOfConsonants('aaaaa'),
    'sasasasa': getNumberOfConsonants('sasasasa'),
    'aeyuioąčė': getNumberOfConsonants('aeyuioąčė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("14. Sukurkite funkciją, kuri grąžina <true>, jeigu NĖRA skaičių");
{
  function isOnlyLetters(str) {
    const letters = (['a', 'ą', 'b', 'c', 'č', 'd', 'e', 'ę', 'ė', 'f', 'g', 'h', 'i', 'į', 'y', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 'š', 't', 'u', 'ų', 'ū', 'v', 'z', 'ž']);

    for (let i = 0; i < str.length; i++) {
      const abcs = str[i];
      if (letters.includes(abcs)) {
        return true;
      } else {
        return false;
      }
    }

  }

  console.log('---');
  console.log({
    'labas': isOnlyLetters('labas'),
    'kempės': isOnlyLetters('kempės'),
    '123123': isOnlyLetters('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("15. Sukurkite funkciją, kuri grąžina 'a' raidžių kiekį žodyje");
{
  function letterACount(str) {
    let count = 0;
    const letterAs = (['a']);
    for (let i = 0; i < str.length; i++) {
      const letterA = str[i];
      if (letterAs.includes(letterA)) {
        count++;
      }
    }
    return count;
  }
  console.log('---');
  console.log({
    'labas': letterACount('labas'),
    'kempės': letterACount('kempės'),
    '123123': letterACount('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("16. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje");
{
  function letterCount(str, searchLetter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      const search = str[i];
      if (searchLetter.includes(search)) {
        count++;
      }
    }
    return count;
  }
  console.log('---');
  console.log({
    'labas, a': letterCount('labas', 'a'),
    'kempės, k': letterCount('kempės', 'k'),
    '123123, z': letterCount('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("17. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) 'a' raidės vietą žodyje");
{
  function lastIndexOfLetterA(str) {
    if (str.indexOf('a') > 0) {
      return str.indexOf('a');
    } else {
      return 'none';
    };
  }
  console.log('---');
  console.log({
    'labas': lastIndexOfLetterA('labas'),
    'kempės': lastIndexOfLetterA('kempės'),
    '123123': lastIndexOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("18. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) vartotojo perduotos raidės vietą žodyje");
{
  function lastIndexOfLetter(str, searchLetter) {
    if (str.indexOf(searchLetter) >= 0) {
      return str.indexOf(searchLetter)
    } else {
      return 'none';
    }
  }
  console.log('---');
  console.log({
    'labas, a': lastIndexOfLetter('labas', 'a'),
    'kempės, k': lastIndexOfLetter('kempės', 'k'),
    '123123, z': lastIndexOfLetter('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("19. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais 'a' raidės pasikartojimais žodyje");
{
  const indexesOfLetterA = (str) => {
    let indexOfA = -1;
    const index = [];
    while (true) {
      indexOfA = str.indexOf('a', indexOfA + 1);
      if (indexOfA === -1) break;
      index.push(indexOfA);
    }
    return index;

  }
  console.log('---');
  console.log({
    'labas': indexesOfLetterA('labas'),
    'kempės': indexesOfLetterA('kempės'),
    '123123': indexesOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("20. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais vartotojo įvestos raidės pasikartojimais žodyje");
{
  function indexesOfLetter(str, searchLetter) {
    let indexOfLetters = -1;
    const newIndexArr = [];
    while (true) {
      indexOfLetters = str.indexOf(searchLetter, indexOfLetters + 1);
      if (indexOfLetters === -1) break;
      newIndexArr.push(indexOfLetters);
    }
    return newIndexArr
  }
  console.log('---');
  console.log({
    'labas, a': indexesOfLetter('labas', 'a'),
    'kempės, m': indexesOfLetter('kempės', 'm'),
    '123123, 2': indexesOfLetter('123123', '2'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("21. Sukurkite funkciją, kuri ištrintų pirmą surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
  function removeFirstLetterA(str) {
    return str.replace('a', '');

  }
  console.log('---');
  console.log({
    'labas': removeFirstLetterA('labas'),
    'kempiniukas': removeFirstLetterA('kempiniukas'),
    '123123': removeFirstLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("22. Sukurkite funkciją, kuri ištrintų paskutinę surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
  function removeLastLetterA(str) {
    const indexOfLastA = str.lastIndexOf('a');
    if (indexOfLastA >= 0) {
      return str.slice(0, indexOfLastA) + str.slice(indexOfLastA + 1);
    }

  }

  console.log('---');
  console.log({
    'labas': removeLastLetterA('labas'),
    'kempiniukas': removeLastLetterA('kempiniukas'),
    '123123': removeLastLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("23. Sukurkite funkciją, kuri ištrintų visus 'a' raidės pasikartojimus žodyje");
{
  function removeAllOccurencesOfLetterA(str) {
    return str.replaceAll('a', '')
  }
  console.log('---');
  console.log({
    'labas': removeAllOccurencesOfLetterA('labas'),
    'kempiniukas': removeAllOccurencesOfLetterA('kempiniukas'),
    '123123': removeAllOccurencesOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("24. Sukurkite funkciją, kuri ištrintų visus, vartotojo įvestos raidės pasikartojimus žodyje");
{
  function removeAllOccurencesOfLetter(str, letter) {
    return str.replaceAll(letter, '')
  }
  console.log('---');
  console.log({
    'labas, a': removeAllOccurencesOfLetter('labas', 'a'),
    'kempiniukas, i': removeAllOccurencesOfLetter('kempiniukas', 'i'),
    '123123, 3': removeAllOccurencesOfLetter('123123', '3'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

// 25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.groupCollapsed("25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.");
{
  function filterLetters(str, lettersToRemove) {
    lettersToRemove.forEach((letter) => {
      str = str.replaceAll(letter, '');
    })
    return str;
  }
  console.log('---');
  const str = filterLetters('Brangakmienio paveikslas', ['a', 'i']);
  console.log(str);
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("26. Sukurkite funkciją, kuri pirmu parametrų priimą sakinį, kiekvieną tarpą pakeičia brūkšneliu ir grąžina pakeistą sakinį");
{
  function replaceSpaceWithDash(str) {
    return str.replaceAll(' ', '-');
  }
  console.log('---');
  console.log({
    'viens du trys': replaceSpaceWithDash('viens du trys'),
    'as tave myliu': replaceSpaceWithDash('as tave myliu'),
    'Bairis seniuk': replaceSpaceWithDash('Bairis seniuk'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("27. Sukurkite funkciją, kuri pirmu parametru priima sakinį, ir kiekvieno žodžio pirmają raidę padaro didžiąja");
{
  function capitalize(str) {
    // return str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()); <----- galima kiekvieną pirmą sakinio mazaja raidę pakeisti didžiaja ---->//
   let str1 = str.split(' ');
   const newStr = [];
   str1.forEach(element =>{
    newStr.push(element[0].toUpperCase() + element.slice(1,element.length));
   })
    return newStr.join(' ')
  }
  
  console.log('---');
  console.log({
    'viens du trys': capitalize('viens du trys'),
    'as tave myliu': capitalize('as tave myliu'),
    'Bairis seniuk': capitalize('Bairis seniuk'),
  })
  console.log('---');
}
console.groupEnd();