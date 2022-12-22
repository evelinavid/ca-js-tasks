console.groupCollapsed('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{
  class Challenge {
    static pointsPerLevel = { 'VE': 5, 'EA': 10, 'ME': 20, 'HA': 40, 'VH': 80, 'EX': 120 }

    constructor(id, level) {
      this.id = id;
      this.level = level;
    }

    get points() {
      return Challenge.pointsPerLevel[this.level]
    }
  }

  class User {
    constructor(name, xp, log) {
      this.name = name;
      this.xp = xp;
      this.log = log;
    }

    newSolvedChallenge(challenge) {
      this.xp += challenge.points
      this.log.push(challenge.id)
    }
  }
  const challenge1 = new Challenge(1, 'VE');
  const challenge2 = new Challenge(2, 'EA');
  const challenge3 = new Challenge(3, 'ME');
  const challenge4 = new Challenge(4, 'HA');
  const challenge5 = new Challenge(5, 'VH');
  const challenge6 = new Challenge(6, 'EX');

  const user1 = new User('Madam', 0, []);
  const user2 = new User('Steve', 0, []);
  user1.newSolvedChallenge(challenge1);
  user1.newSolvedChallenge(challenge4);
  user1.newSolvedChallenge(challenge6);
  user2.newSolvedChallenge(challenge5);
  user2.newSolvedChallenge(challenge3);
  user2.newSolvedChallenge(challenge2);

  console.log(user1);
  console.log(user2);
}
console.groupEnd();

console.group('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{
  class Player {
    #hp;
    #maxHp;
    #en;
    #maxEn;
    armor;
    name;
    constructor(name, maxHp, maxEn, armor) {
      this.#hp = maxHp;
      this.#maxHp = maxHp;
      this.#en = maxEn;
      this.#maxEn = maxEn;
      this.armor = armor;
      this.name = name;
    }
    get hp() {
      return this.#hp;
    }

    set hp(val) {
      if (val < 0) {
        this.#hp = 0;
      } else if (val > this.#maxHp) {
        this.#hp = this.#maxHp
      } else {
        this.#hp = val
      }
    }
    set en(val) {
      if (val < 0) {
        this.#en = 0;
      } else if (val > this.#maxEn) {
        this.#en = this.#maxEn
      } else {
        this.#en = val
      }
    }

    get en() {
      return this.#en;
    }

    get hpPerc() {
      return (this.#hp * 100 / this.#maxHp).toFixed(2);
    }
    learnSkill(skillName, { damage, desc, penetration, cost, heal }) {
      this[skillName] = function (target) {
        const effectiveArmor = target.armor - penetration;
        if (cost > this.#en) {
          return `${this.name} attempted to use ${skillName}, but didn't have enough energy!`
        } else {
          this.#en -= cost;
        }
        const damagePlayr = (damage * ((100 - effectiveArmor) / 100)).toFixed(2);
        target.hp -= damagePlayr;
        let beforeHeal = this.#hp;
        this.#hp += heal;
        const healAmount = this.#hp - beforeHeal;
       
        return `${this.name} used skill ${skillName}, ${desc}, against ${target.name}, doing ${damagePlayr} damage!` +
          (
            healAmount > 0
              ? ` ${this.name} healed for ${healAmount} health!`
              : ''
          ) +
          (
            target.hp <= damagePlayr
              ? ` ${target.name} died. `
              : ` ${target.name} is at ${target.hpPerc}% health.`
          )

      }
    }

  }

  const alice = new Player("Alice", 110, 50, 10);
  const bob = new Player("Bob", 100, 60, 20)


  alice.learnSkill("fireball", {
    damage: 23,
    penetration: 1.2,
    heal: 5,
    cost: 15,
    desc: "a firey magical attack"
  })
  console.log(alice.fireball(bob))

  bob.learnSkill("superbeam", {
    damage: 200,
    penetration: 50,
    heal: 50,
    cost: 75,
    desc: "an overpowered attack, pls nerf"
  })

  console.log(bob.superbeam(alice))


}
console.groupEnd();

