console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{

  function returnFirstElement(masyvas1) {
    return masyvas1[0];
  }

  const res1 = returnFirstElement(['laukas']);
  console.log(res1);

}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  function deleteFirstArrayElement(array) {
    const firstElement = array[0];
    for (let i = 1; i < array.length; i++) {
      array[i - 1] = array[i];
    }
    array.length = array.length - 1;
    return firstElement;
  }
  const numbers = [1, 2, 3, 4, 5];
  console.log('numbers before removal', numbers);
  const firstElement = deleteFirstArrayElement(numbers);
  console.log('numbers after removal', numbers);
  console.log('removed element', firstElement)

}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  function returnArrayLastElement(array) {
    return array[array.length - 1]
  }
  const res1 = returnArrayLastElement([1, 2, 4]);
  const res2 = returnArrayLastElement([7, 9, 5, 8, 4, 3]);

  console.log({ res1, res2 })
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{

  function deleteLastArrayElement(array) {
    //                          Paskutinis elementas
    const removedLastElement = array[array.length - 1];

    array.length -= 1; // pašalina paskutinį masyvo elementą

    return removedLastElement; // jį grąžina
  }

  const nuorodaIMasyva = [7, 8, 1, 15, -7];

  console.log('masyvas pries pasalinima:', nuorodaIMasyva);
  const removedLastEl = deleteLastArrayElement(nuorodaIMasyva);
  console.log('masyvas po pasalinima:', nuorodaIMasyva);
  console.log('pasalintas elementas:', removedLastEl)
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  function returnArrayElements(array) {
    return array.length;
  }
  const res1 = returnArrayElements([7, 8, 9, 1, 11, 112]);
  console.log(res1);
}

console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  function printLastElementIndex(array) {
    return array.length - 1;
  }
  const resIndex = printLastElementIndex([44, 48, 43, 47, 49]);
  console.log(resIndex);
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  function printIndexesRows(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(i);
    }
  }
  printIndexesRows([7, 8, 9, 4, 5, 6, 1, 2, 3]);
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  function printArrayRow(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  printArrayRow([1, 5, 9, 7, 8, 36]);
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
{
  function printArrayIndex(array) {
    for (let i = 0; i < array.length; i++) {
      console.log('[' + i + ']' + '=>' + array[i]);
    }
  }
  printArrayIndex([7, 8, 9, 7, 5, 7, 5, 7]);
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  function printArrayBackwards(array) {
    for (let i = array.length - 1; i >= 0; i -= 1) {
      console.log(array[i]);
    }
  }
  printArrayBackwards([7, 8, 9, 4, 5, 6, 1, 2, 3]);
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  function printIndexesRow(array) {
    let row = '';

    for (let i = 0; i < array.length; i += 1) {
      // papaildyti kintamti row, indeksu
      row += i + ' ';
    }
    console.log(row);
  }
  const testArr1 = [7, 6, 99, 5];
  const testArr2 = ['vienas', 'trys', 'du'];

  printIndexesRow(testArr1);
  printIndexesRow(testArr2);
}

console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  function printArrayElementRow(array) {
    let row = '';
    for (let i = 0; i < array.length; i += 1) {
      row += array[i] + ' ';
    }
    console.log(row);
  }
  const arr1 = [-4, -9, -88, 123, 78, 9];

  printArrayElementRow(arr1);
}
console.groupEnd();

console.group('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  function printIndexPArray(array) {
    let row = '';
    for (let i = 0; i < array.length; i++) {
      row += '[' + i + ']=>' + array[i] + ' ';
    }
    console.log(row);

  }
  printIndexPArray([-11, -6, 78, 108, 369])
}

console.groupEnd();

