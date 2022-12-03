
// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.groupCollapsed('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrBy2(arr) {
    return arr * 2;
  }
  const result = numbers.map(mulArrBy2)
  console.log({
    numbers,
    result
  });
}
console.log('---');
console.groupEnd();
console.log();

console.groupCollapsed('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  function powerArrBy2(arr) {
    return arr ** 2;
  }
  const result = numbers.map(powerArrBy2)
  console.log({
    numbers,
    result
  });
}
console.log('---');
console.groupEnd();
console.log();

console.groupCollapsed('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrElementsByIndex(x, arr) {
    return x * arr;
  }
  const result = numbers.map(mulArrElementsByIndex)
  console.log({
    numbers,
    result
  });
}
console.log('---');
console.groupEnd();
console.log();

console.groupCollapsed('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  function filterPositives(arr) {
    return arr > 0;
  }
  const result = numbers.filter(filterPositives)
  console.log({
    numbers,
    result
  });
}
console.log('---');
console.groupEnd();
console.log();

console.groupCollapsed('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(arr) {
    return arr < 0;
  }
  const result = numbers.filter(filterNegatives)
  console.log({
    numbers,
    result
  });
}
console.log('---');
console.groupEnd();
console.log();

console.groupCollapsed('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(arr) {
    return arr % 2 === 0;
  }
  const result = numbers.filter(filterEquals);
  console.log({
    numbers,
    result
  });
}
console.log('---');
console.groupEnd();
console.log();

console.groupCollapsed('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(arr) {
    return arr % 2 === 1 || arr % 2 === -1;
  }
  const result = numbers.filter(filterOdds);
  console.log({
    numbers,
    result
  });
}
console.log('---');
console.groupEnd();
console.log();

console.groupCollapsed("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  function arrAbsoluteValues(einamasisMasyvoElementas) {
    if (einamasisMasyvoElementas < 0) {
      return einamasisMasyvoElementas * -1
    }
    return einamasisMasyvoElementas;
  }
  const result = numbers.map(arrAbsoluteValues);

  console.log('---');
  console.log({
    numbers,
    result
  });
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementByIndex(el, i) {

    return el ** i;
  }

  const result = numbers.map(powArrElementByIndex);
  console.log({
    numbers,
    result: result
  });
}
console.log('---');
console.groupEnd();
console.log();

console.groupCollapsed('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(el) {
    return el > 0 && el % 1 === 0;
  }
  const result = numbers.filter(filterNaturals)
  console.log({
    numbers,
    result
  });
}
console.log('---');
console.groupEnd();
console.log();

console.groupCollapsed('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  function absArrElements(arr) {
    return Math.round(arr);
  }
  const result = numbers.map(absArrElements)
  console.log({
    numbers,
    result
  });
}
console.log('---');
console.groupEnd()

console.groupCollapsed('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(arr, a) {
    return a % 2 === 0
  }
  const result = numbers.filter(filterEverySecond);
  console.log({
    numbers,
    result
  });
}
console.log('---');
console.groupEnd();

console.groupCollapsed('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(arr, b) {
    return b % 5 === 0;
  }
  const result = numbers.filter(filterEveryFifth);
  console.log({
    numbers,
    result
  });
}
console.log('---');
console.groupEnd();


console.groupCollapsed('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr(arr, c) {
    console.log(`[${c}] => ${arr}`)
  }
  numbers.forEach(printArr);
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(sum, arr) {
    return sum + arr;
  }
  const result = numbers.reduce(sumArr)
  console.log({
    numbers,
    result
  });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(sum, arr) {
    return sum + arr;
  }
  const result = numbers.reduce(avgArr) / numbers.length
  console.log({
    numbers,
    result
  });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  function arrMax(arr, max) {
    if(arr > max){
      max = arr
    }
    return max;
  }

  const result = numbers.reduce(arrMax);
  console.log(result);
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(arr, min) {
    if(arr < min){
      min = arr;
    }
    return min;
  }
const result  = numbers.reduce(arrMin);
  console.log({
    numbers,
    result
  });
}
console.log('---');
console.groupEnd();
