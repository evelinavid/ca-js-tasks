console.groupCollapsed("https://edabit.com/challenge/ARr5tA458o2tC9FTN");
{
  function hello() {
    return "hello edabit.com";
  }
  const result = hello();
  console.log(result);
}

console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/3LpBLgNRyaHMvNb4j");
{
  function addition(number1, number2) {
    return number1 + number2;
  }
  console.log(addition(3, 2));
  console.log(addition(-3, -6));
  console.log(addition(7, 3));
}

console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/nhXofMMyrowMyr9Nv");
{
  function nextEdge(side1, side2) {
    return (side1 + side2) - 1;
  }
  console.log(nextEdge(8, 10));
  console.log(nextEdge(5, 7));
  console.log(nextEdge(9, 2));
}

console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/6AnQqiEjkJdZrWhPS");
{
  function howManySeconds(hours) {
    return hours * 3600;
  }
  console.log(howManySeconds(2));
  console.log(howManySeconds(10));
  console.log(howManySeconds(24));
}

console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/wAdE9te55cowBLcPs");
{
  function circutPower(voltage, current) {
    return voltage * current;
  }
  console.log(circutPower(230, 10));
  console.log(circutPower(110, 3));
  console.log(circutPower(480, 20));
}

console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/3CaszbdZYGN4otQD8");
{
  function triArea(base, height) {
    return (base * height) / 2;
  }
  console.log(triArea(3, 2));
  console.log(triArea(7, 4));
  console.log(triArea(10, 10));
}

console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/XnJ24rWW7iJkNrtsh");
{
  function findParameter(length, width) {
    return (length + width) * 2;
  }
  console.log(
    [
      findParameter(6, 7),
      findParameter(20, 10),
      findParameter(2, 9)
    ]
  )
}

console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/bL7hSc6Zh4zZJzGmw");
{
  function calcAge(age) {
    return age * 365;
  }
  console.log(calcAge(65));
  console.log(calcAge(0));
  console.log(calcAge(20));
}

console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/NAQhEoxbofPidLxm9");
{
  function addition(number) {
    return number + 1;
  }
  console.log(addition(0));
  console.log(addition(9));
  console.log(addition(-3));
}

console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/8q54MKnRrm89pSLmW");
{
  function convert(min) {
    return min * 60;
  }
  console.log(convert(5));
  console.log(convert(3));
  console.log(convert(2));
}

console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/QaApgtePE6QrCZ64o");
{
  function getFirstValue(array) {
    return array[0];
  }
  console.log(getFirstValue([1, 2, 3]));
  console.log(getFirstValue([80, 5, 200]));
  console.log(getFirstValue([-500, 0, 50]));
}

console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk");
{
  function remainder(par1, par2) {
    return par1 % par2;
  }
  console.log(remainder(1, 3));
  console.log(remainder(3, 4));
  console.log(remainder(-9, 45));
  console.log(remainder(5, 5));
}

console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/MvZK536X7fyrWH8Qc");
{
  function giveMeSomething(phrase) {
    return 'something ' + phrase;
  }
  console.log(giveMeSomething('is better than nothing'));
  console.log(giveMeSomething('Bob Jan'));
  console.log(giveMeSomething('something'));
}

console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/PTiLYyb4A69KZtBCg");
{
  function lessThanOrEqualToZero(num) {
    return num <= 0;
  }
  console.log(lessThanOrEqualToZero(5));
  console.log(lessThanOrEqualToZero(0));
  console.log(lessThanOrEqualToZero(-2));
}

console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/GLbuMfTtDWwDv2F73");
{
  function countTrue(array) {
    return array.filter(x => x === 'true').length
  }

  console.log(countTrue(['true', 'false', 'false', 'true', 'false']));
  console.log(countTrue(['false', 'false', 'false']));
  console.log(countTrue([]));
}

console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/hzxN9bAebBPNqdQto");
{
  function redundant(str) { //funkcija-funkcijoje
    return function () {
      return str;
    }
  }
  const f1 = redundant("apple")();
  const f2 = redundant("pear")();
  const f3 = redundant("")();
  console.log({ f1, f2, f3 });
}

console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/yFJzLfYghz7ZtsyAN");
{
  function returnNumber(num) {
    return Math.abs(num).toString().length; // - apskaičiuoja kiek masyvo elementų yra elemente
  }
  console.log(returnNumber(1000));
  console.log(returnNumber(12));
  console.log(returnNumber(1305981031));
  console.log(returnNumber(1));

}
console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/NHfYRHg2tDtcZyykB");
{
  function possibleBonus(a, b) {
    // return a + //tikrinti 1,2,3,4,5,6 >= b
    if (a >= b) {
      return false
    }
    if (a + 6 >= b) {
      return true;
    } else {
      return false
    }
  }
  console.log(possibleBonus(3, 7));
  console.log(possibleBonus(1, 9));
  console.log(possibleBonus(5, 3));
}

console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/48EJWLhF224na8po3");
{
  function generation(x, y) {
  
  const generations = {
    '-3': {
      m: 'great grandfather',
      f: 'great grandmother'
    },
    '-2': {
      m: 'grandfather',
      f: 'grandmother'
    },
    '-1': {
      m: 'father',
      f: 'mother'
    },
    '0': {
      m: 'me!',
      f: 'me!'
    },
    '1': {
      m: 'son',
      f: 'daughter'
    },
    '2': {
      m: 'grandson',
      f: 'granddaughter'
    },
    '3': {
      m: 'great grandson',
      f: 'great granddaughter'
    },
    
  };
  return generations[x][y]
}
  console.log(generation(2,'f'));
  console.log(generation(-3,'m'));
  console.log(generation(1,'f'));
}

console.groupEnd();

