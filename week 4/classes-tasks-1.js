
// 1. Sukurti klasę Automobilis

//   - sukurti konstruktorių, su 3 argumentais:
//     - marke, modelis, kaina

//   - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
//     - this.brand
//     - this.model
//     - this.price

class Automobilis {
    marke;
    modelis;
    kaina;

    constructor(marke, modelis, kaina) {
        this.marke = marke;
        this.modelis = modelis;
        this.kaina = kaina;
    }

    didintiKaina(pliusKaina){
        console.log(this);
        this.kaina += pliusKaina;
      }
}

// 2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:

const car1 = new Automobilis('Audi', 'A6', 15000);
const car2 = new Automobilis('Toyota', 'Corolla', 25000);
const car3 = new Automobilis('BMW', 'X5', 35000);

// 3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai

const automobiliai = [car1, car2, car3];
console.log(automobiliai);

// 4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):

console.log(car1.modelis);
console.log(car2.modelis);
console.log(car3.modelis);

console.log(car1.marke);
console.log(car2.marke);
console.log(car3.marke);

console.log(car1.kaina);
console.log(car2.kaina);
console.log(car3.kaina);

// 5. Padidinkite Automobilis objektų kainas šimtu.

  automobiliai.forEach(auto => auto.didintiKaina(100));

// 6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.

console.log(automobiliai)

