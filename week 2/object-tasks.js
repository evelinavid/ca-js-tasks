console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
  function sortDrinksByPrice(drinks) {
    function byPrice(d1, d2) {
      // if return + -> d1 priroitetas aukštesnis
      // if return - -> d2 priroitetas aukštesnis
      // if return 0 -> prioritetai lygūs
      return d1.price - d2.price;
    }
    return drinks.sort(byPrice)
  }
  const drinks1 = [
    { name: 'lemonade', price: 90 },
    { name: 'lime', price: 432 },
    { name: 'peach', price: 23 }
  ];
  console.log(sortDrinksByPrice(drinks1));
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  function addName(obj, name, value) {
    obj[name] = value;
    return obj;
  }
  console.log(addName({}, "Brutus", 300));
  console.log(addName({ piano: 500 }, "Brutus", 400));
  console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
  function generation(gen, sex) {
    const generations = {
      m:{
        '-3':'great grandfather', 
        '-2': 'grandfather',
        '-1':'father',
        '0': 'me!',
        '1': 'son',
        '2': 'grandson',
        '3': 'great grandson',
      },
      f:{
        '-3':'great grandmother',
        '-2':'grandmother',
        '-1':'mother',
        '0': 'me!',
        '1': 'daughter',
        '2': 'granddaughter',
        '3':'great granddaughter',
      }
    
    }
    return generations[sex][gen]
  }
  console.log(generation(2, "f"));
  console.log(generation(-3, "m"));
  console.log(generation(1, "f"));

}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
  function maximumScore(tileHand) {
    let sum = 0;
    for (let i = 0; i < tileHand.length; i++) {
      sum += tileHand[i].score
    }
    return sum;
  }
  console.log(maximumScore([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
  ]))
  console.log(maximumScore([
    { tile: "B", score: 2 },
    { tile: "V", score: 4 },
    { tile: "F", score: 4 },
    { tile: "U", score: 1 },
    { tile: "D", score: 2 },
    { tile: "O", score: 1 },
    { tile: "U", score: 1 }
  ]))
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
  function calculateDifference(obj, limit) {
    const arrObj = Object.values(obj);
    let sum = 0;
    for (let i = 0; i < arrObj.length; i++)
      sum += arrObj[i];
    return sum - limit;
  }
  console.table({
    'calculateDifference({ "baseball bat": 20 }, 5)': calculateDifference({ "baseball bat": 20 }, 5),
    'calculateDifference({ skate: 10, painting: 20 }, 19)': calculateDifference({ skate: 10, painting: 20 }, 19),
    'calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)': calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)
  })
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
  function toArray(obj) {
    return Object.entries(obj)
  }
  console.log(toArray({ a: 1, b: 2 }));
  console.log(toArray({ shrimp: 15, tots: 12 }));
  console.log(toArray({}));
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
  function inkLevels(inks) {
    const inkValues = Object.values(inks);
    let min = inkValues[0];
    for (let i = 1; i < inkValues.length; i++) {
      if (inkValues[i] < min) {
        min = inkValues[i];
      }
    }
    return min;
  }
  console.table({
    'inkLevels({ "cyan": 23, "magenta": 12, "yellow": 10})': inkLevels({ "cyan": 23, "magenta": 12, "yellow": 10 }),
    'inkLevels({ "cyan": 432, "magenta": 543, "yellow": 777})': inkLevels({ "cyan": 432, "magenta": 543, "yellow": 777 }),
    'inkLevels({ "cyan": 700, "magenta": 700, "yellow": 0})': inkLevels({ "cyan": 700, "magenta": 700, "yellow": 0 })
  })
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{

  function calculateLosses(obj) {
    const calcVa = Object.values(obj);
    let sum = calcVa[0];
    for (let i = 1; i < calcVa.length; i++) {
      sum += calcVa[i];
    }
    if (sum > 0) return sum;
    return 'Lucky you!'
  }

  console.table({
    'calculateLosses({tv: 30,skate: 20, stereo: 50})': calculateLosses({ tv: 30, skate: 20, stereo: 50 }),
    'calculateLosses({painting: 20000})': calculateLosses({ painting: 20000 }),
    'calculateLosses({})': calculateLosses({}),
  })
}
console.groupEnd();