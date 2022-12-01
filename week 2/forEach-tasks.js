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

// Kiekvienai užduočiai padeklaruokite funkciją, kurią panaudosite kviesdami metodą Array.prototype.forEach

console.groupCollapsed('1. Atspausdinkite kiekvieno buto adresą su miestu');
// <address>, <city>.
{
  function printAddressCity(flat) {
    console.log(`${flat.address}, ${flat.city}.`)
  }
  flats.forEach(printAddressCity);
}
console.groupEnd();

console.groupCollapsed('2. Atspausdinkite kiekvieno buto kambarių skaičių');
{
  function printFlatRooms(flat) {
    console.log(flat.rooms.length);
  }
  flats.forEach(printFlatRooms);
}
console.groupEnd();

console.group('3. Atspausdinkite kiekvieno buto bendrą plotą');
// Reikės susumuoti naudojant kaupimo algoritmą
{
  function sumFlatRooms(flat) {
    let sum = 0;
    for (let i = 0; i < flat.rooms.length; i++) {
      sum += flat.rooms[i].area;
    }
    console.log(sum);
  }
 
flats.forEach(sumFlatRooms);  
}
console.groupEnd();