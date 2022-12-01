const flats = [
  {
    address: 'Vilnakiemio g. 7',
    rooms: [
      { title: 'virtuvė', area: 12 },
      { title: 'svetainė', area: 20 },
      { title: 'tualetas', area: 8 },
      { title: 'miegamasis', area: 16 },
    ],
    city: 'Vilnius',
    price: 120000
  },

  {
    address: 'Ruginių pr. 17',
    rooms: [
      { title: 'virtuvė', area: 18 },
      { title: 'svetainė', area: 18 },
      { title: 'tualetas', area: 8 },
      { title: 'miegamasis', area: 12 },
      { title: 'miegamasis2', area: 16 },
    ],
    city: 'Kaunas',
    price: 120000
  },

  {
    address: 'Saulės g. 7',
    rooms: [
      { title: 'virtuvė', area: 12 },
      { title: 'svetainė', area: 20 },
      { title: 'tualetas', area: 8 },
    ],
    city: 'Klaipėda',
    price: 80000
  },
];

const numbers = [1, 15, 9, -9, -8, -7, 2, 8, 51, 6, 5];


// Kiekvienai užduočiai padeklaruokite funkciją, kurią panaudosite kviesdami metodą Array.prototype.reduce
console.groupCollapsed('1. Sudėkite visus skaičius naudojant Array.prototype.reduce');
{
  function sumNumbers(prevSum, number) {
    return prevSum + number;
  }
  const totalSum = numbers.reduce(sumNumbers);
  console.log(totalSum);
}
console.groupEnd();

console.groupCollapsed('2. Sudėkite visus teigiamus skaičius naudojant Array.prototype.reduce');
{
  function sumPositiveNumbers(prevSum, number) {
    if (number < 0) {
      return prevSum;
    } else {
      return prevSum + number;
    }
  }
  const totalPSum = numbers.reduce(sumPositiveNumbers)
  console.log(totalPSum)
}
console.groupEnd();

console.groupCollapsed('3. Sudėkite visus neigiamus skaičius naudojant Array.prototype.reduce');
{
  function sumNegative(prevSum, number) {
    if (number > 0) {
      return prevSum;
    } else {
      return prevSum + number;
    }
  }
  const totalNSum = numbers.reduce(sumNegative);
  console.log(totalNSum);
}
console.groupEnd();

console.groupCollapsed('4. Suskaičiuokite visų butų kainų sumą');
{
  function sumFlatPrice(prevSum, flat) {
    return prevSum + flat.price;
  }
  const totalPrice = flats.reduce(sumFlatPrice, 0);
  console.log(totalPrice);
}
console.groupEnd();

console.groupCollapsed('5. Suskaičiuokite vieno buto plotą');
{
  function sumOneFlat(prevSum, room) {
    return prevSum + room.area;
  }
  const totalOArea = flats[0].rooms.reduce(sumOneFlat, 0);
  console.log(totalOArea);
}
console.groupEnd();

console.group('6. Suskaičiuokite visų butų bendrą plotą');
{
  function sumAllFlatsArea(prevSum, rooms) {
    return prevSum + rooms.area;
  }
  function sumTotalArea(prevSum, flat) {
    return prevSum + flat.rooms.reduce(sumAllFlatsArea, 0);
  }
  const totalArea = flats.reduce(sumTotalArea, 0);
  console.log(totalArea)
}
console.groupEnd();
