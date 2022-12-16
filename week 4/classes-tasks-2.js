console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
    class Player {
        name;
        age;
        height;
        weight;
        constructor(name, age, height, weight) {
            this.name = name;
            this.age = age;
            this.height = height;
            this.weight = weight;
        }

        getAge() {
            return `${this.name} is age ${this.age}`;
        }

        getHeight() {
            return `${this.name} is ${this.height}cm`;
        }

        getWeight() {
            return `${this.name} weighs ${this.weight}kg`;
        }
    }

    const players = [
        new Player('John Baker', 21, 193, 95),
        new Player('David Johnes', 20, 183, 65),
        new Player('Joanna Rust', 21, 173, 60),
        new Player('Ronaldo Juhan', 22, 180, 85),
        new Player('John Tukans', 23, 197, 95)
    ]

    players.forEach(x => console.log(x.getAge()));
    players.forEach(x => console.log(x.getHeight()));
    players.forEach(x => console.log(x.getWeight()));

}

console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
    class Calculator {
        Add(a, b) {
            return a + b;
        }

        Subtract(a, b) {
            return a - b;
        }

        Multiply(a, b) {
            return a * b;
        }

        Divide(a, b) {
            return a / b;
        }
    }

    const calculate = new Calculator();
    console.log(calculate.Add(10, 5));
    console.log(calculate.Subtract(10, 5));
    console.log(calculate.Multiply(10, 5));
    console.log(calculate.Divide(10, 5));


}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
    class Employee {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.fullname = `${this.firstname} ${this.lastname}`
            this.email = `${this.firstname}.${this.lastname}@company.com`.toLowerCase();
        }
    }
    const employes = [
        new Employee('John', 'Smith'),
        new Employee('Mary', 'Sue'),
        new Employee('Antony', 'Walker'),
    ];

    employes.forEach(x => console.log(x.firstname));
    employes.forEach(x => console.log(x.fullname));
    employes.forEach(x => console.log(x.email));

}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        compareAge(other) {
            if (this.age < other.age) {
                return `${other.name} is older than me.`
            } else if (this.age === other.age) {
                return `${other.name} is the same age as me.`
            } else if (this.age > other.age) {
                return `${other.name} is younger than me.`
            }
        }
    }

    const p1 = new Person('Samuel', 24);
    const p2 = new Person('Joel', 36);
    const p3 = new Person('Lily', 24);

    console.log(p1.compareAge(p2));
    console.log(p2.compareAge(p1));
    console.log(p2.compareAge(p3));
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
    class Rectangle {
        constructor(sideA, sideB) {
            this.sideA = sideA
            this.sideB = sideB
        }
        getArea() { return this.sideA * this.sideB }
        getPerimeter() { return (this.sideA + this.sideB) * 2 }
    }


    class Circle {
        constructor(radius) {
            this.radius = radius;
        }

        getArea() {
            return Math.PI * this.radius ** 2;
        }

        getPerimeter() {
            return 2 * Math.PI * this.radius;
        }
    }

    // unquote and use run to test these cases:
    let qq = new Circle(11);
    console.log(qq.getArea());

    let q = new Circle(4.44);
    console.log(q.getPerimeter());

}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
    class Name {
        fname;
        lname;
        constructor(fname, lname) {
            this.fname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
            this.lname = lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase();
            this.fullname = `${this.fname} ${this.lname}`;
            this.initials = `${this.fname.charAt(0)}.${this.lname.charAt(0)}`;
        }
    }

    const a1 = new Name('john', 'SMITH');

    console.log(a1.fname);
    console.log(a1.lname);
    console.log(a1.fullname);
    console.log(a1.initials);
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
    const sweetness = {
        'Plain': 0,
        'Vanilla': 5,
        'ChocolateChip': 5,
        'Strawberry': 10,
        'Chocolate': 10,
    };

    function sweetestIcecream(arr) {
        const sweetnessLevels = arr.map(ice => ice.numSprinkles + sweetness[ice.flavor])
        return Math.max(...sweetnessLevels);
    }

    class IceCream {
        constructor(flavor, numSprinkles) {
            this.flavor = flavor;
            this.numSprinkles = numSprinkles;
        }
    }

    const ice1 = new IceCream("Chocolate", 13)
    const ice2 = new IceCream("Vanilla", 0)
    const ice3 = new IceCream("Strawberry", 7)
    const ice4 = new IceCream("Plain", 18)
    const ice5 = new IceCream("ChocolateChip", 3)

    const max = sweetestIcecream([ice1, ice2, ice3, ice4, ice5]);
    console.log(max);

}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
    class OnesThreesNines {
        constructor(num) {
            this.ones = Math.floor(num / 1);
            this.nines = Math.floor(num / 9);
            this.threes = Math.floor(num / 3);
        }
    }
    const n1 = new OnesThreesNines(5);
    console.log(n1.ones);
    console.log(n1.nines);
    console.log(n1.threes);
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
    class User {
        static userCount = 0;
        constructor(username) {
            this.username = username;
            User.userCount++;
        }
    }

    const u1 = new User("johnsmith10");
    const u2 = new User("marysue1989");
    const u3 = new User("milan_rodrick");

    console.log(User.userCount);
    console.log(u1.username, u2.username, u3.username,);
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
    class Book {
        constructor(title, author) {
            this.title = title;
            this.author = author;
        }

        getTitle() {
            return `Title: ${this.title}`
        }

        getAuthor() {
            return `Author: ${this.author}`
        }
    }
    const PP = new Book('Pride and Prejudice', 'Jane Austen');
    const H = new Book('Hamlet', 'William Shakespeare');
    const HP = new Book('Harry Potter', 'J.K.Rowling');

    console.log(PP.title);
    console.log(PP.author);
    console.log(PP.getTitle());
    console.log(PP.getAuthor());

    console.log(H.title);
    console.log(H.author);
    console.log(H.getTitle());
    console.log(H.getAuthor());

    console.log(HP.title);
    console.log(HP.author);
    console.log(HP.getTitle());
    console.log(HP.getAuthor());
}
console.groupEnd();
