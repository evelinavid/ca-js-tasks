// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];


console.groupCollapsed('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrBy2(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = arr[i] * 2
    }
    return newArr;
  }
  console.log({
    numbers,
    result: mulArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.groupCollapsed('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  function powerArrBy2(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = arr[i] ** 2
    }
    return newArr;
  }
  console.log({
    numbers,
    result: powerArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.groupCollapsed('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrElementsByIndex(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = arr[i] * i //padaugina iš indexso
    }
    return newArr;
  }
  console.log({
    numbers,
    result: mulArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.groupCollapsed('4. Atrinkti tiktai teigiamų elementų masyvą');
console.log('---');
{
  function filterPositives(arr) {
    const newArr = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        newArr[j] = arr[i];
        j++;
      }
    }
    return newArr;
  }
  console.log({
    numbers,
    result: filterPositives(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.groupCollapsed('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(arr) {
    const newArr = [];
    let neg = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        newArr[neg] = arr[i];
        neg++
      }
    }
    return newArr;
  }

  console.log({
    numbers,
    result: filterNegatives(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.groupCollapsed('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(arr) {
    const newArr = [];
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        newArr[x] = arr[i];
        x++;
      }
    }
    return newArr;
  }
  console.log({
    numbers,
    result: filterEquals(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.groupCollapsed('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(arr) {
    const newArr = [];
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 1 || arr[i] % 2 === -1) {
        newArr[x] = arr[i];
        x++;
      }
    }
    return newArr;
  }
  console.log({
    numbers,
    result: filterOdds(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.groupCollapsed("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  function arrAbsoluteValues(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        newArr[i] = arr[i] * -1;
      } else {
        newArr[i] = arr[i];
      }
    }
    return newArr;
  }

  console.log('---');
  console.log({
    numbers,
    result: arrAbsoluteValues(numbers)
  });
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementsByIndex(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = arr[i] ** i // pakelia masyva indexo laipsniu
    }
    return newArr;
  }

  console.log({
    numbers,
    result: powArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.groupCollapsed('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(arr) {
    const newArr = [];
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0 && arr[i] % 1 === 0) {
        newArr[x] = arr[i]
        x++;
      }
    }
    return newArr;
  }
  console.log({
    numbers,
    result: filterNaturals(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.groupCollapsed('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  function absArrElements(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = arr[i].toFixed(0);
    }
    return newArr;
  }
  console.log({
    numbers,
    result: absArrElements(numbers)
  });
}
console.log('---');
console.groupEnd()

console.groupCollapsed('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(arr) {
    const newArr = [];
    let x = 0;
    for (let i = 0; i < arr.length; i += 2) {
      newArr[x] = arr[i]
      x++;
    }
    return newArr;
  }
  console.log({
    numbers,
    result: filterEverySecond(numbers)
  });
}
console.log('---');
console.groupEnd();

console.groupCollapsed('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(arr) {
    const newArr = [];
    let x = 0;
    for (let i = 0; i < arr.length; i += 5) {
      newArr[x] = arr[i]
      x++;
    }
    return newArr;
  }
  console.log({
    numbers,
    result: filterEveryFifth(numbers)
  });
}
console.log('---');
console.groupEnd();


console.groupCollapsed('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`[${i}] => ${arr[i]}.`)
    }
  }

  printArr(numbers);
}
console.log('---');
console.groupEnd();

console.groupCollapsed('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  console.log({
    numbers,
    result: sumArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.groupCollapsed('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  function avgArr(arr) {
    return sumArr(arr) / arr.length;
  }

  console.log({
    numbers,
    result: avgArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.groupCollapsed('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  function arrMax(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; ++i) {
      if (arr[i] > max) {
        max = arr[i]
      }
    }
    return max;
  }

  console.log({
    numbers,
    result: arrMax(numbers)
  });
}
console.log('---');
console.groupEnd()

console.groupCollapsed('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }

  console.log({
    numbers,
    result: arrMin(numbers)
  });
}
console.log('---');
console.groupEnd();
