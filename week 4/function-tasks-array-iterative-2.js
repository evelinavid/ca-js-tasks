
const students = [
  {
    name: 'Panatėja',
    surname: 'Sulindytė',
    faculty: 'Informatikos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Operacinės sistemos',
        credits: 6,
        marks: [10, 7, 7, 6, 9]
      },
      {
        title: 'Algoritmų analizė',
        credits: 9,
        marks: [8, 8, 6, 4, 6]
      },
      {
        title: 'Tikimybės ir Statistika',
        credits: 6,
        marks: [9, 7, 8, 9, 6]
      },
      {
        title: 'Inžinerinis projektas',
        credits: 3,
        marks: [10, 8, 9, 8]
      },
      {
        title: 'Kompiuterių architektūra',
        credits: 6,
        marks: [6, 8, 7, 8, 8]
      }
    ]
  },
  {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [7, 6, 9, 10, 8]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [7, 8, 9, 4, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [6, 8, 10, 9, 9]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [10, 8, 9, 8, 8]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [6, 7, 8, 8, 8]
      }
    ]
  },
  {
    name: 'Laptokas',
    surname: 'Klavianskas',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [9, 8, 10, 9, 10]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [9, 9, 10, 10, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [10, 10, 10, 9, 10]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [9, 8, 9, 10, 10]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [8, 9, 8, 10, 8]
      }
    ]
  },
  {
    name: 'Skaistė',
    surname: 'Kolbaitė',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [9, 9, 10, 9, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [10, 10, 10, 9, 9]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [9, 9, 9, 9]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [10, 9, 8, 10, 7]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [9, 10, 10, 10, 9]
      }
    ]
  },
  {
    name: 'Cilindras',
    surname: 'Katalizatorius',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [6, 8, 9, 4, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [9, 8, 7, 8, 10]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [7, 8, 9, 10, 6]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [8, 9, 6, 4]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [8, 7, 9, 5, 9]
      }
    ]
  },
  {
    name: 'Grandinius',
    surname: 'Varžauskas',
    faculty: 'Elektros ir elektronikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [8, 9, 9, 9, 9]
      },
      {
        title: 'Elektos grandinės',
        credits: 6,
        marks: [8, 7, 9, 9, 10]
      },
      {
        title: 'Elektros tinklai',
        credits: 6,
        marks: [9, 9, 8, 8, 10]
      },
      {
        title: 'Braižyba',
        credits: 6,
        marks: [6, 8, 9, 8, 7]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [9, 9, 9, 10, 8]
      }
    ]
  },
];

console.groupEnd();

console.groupCollapsed('1. Atspausdinti visus Informatikos fakulteto studentus');
{
  const printInformaticsStudents = students.filter(x => x.faculty === 'Informatikos fakultetas');
  console.table(printInformaticsStudents);
}

console.groupEnd();

console.groupCollapsed('2. Atspausdinti visus Chemijos fakulteto studentus');
{
  const printChemistryStudents = students.filter(x => x.faculty === 'Chemijos fakultetas');
  console.table(printChemistryStudents);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinti visus Elektros ir elektronikos fakulteto studentus');
{
  const printElecticityAndElectronicsStudents = students.filter(x => x.faculty === 'Elektros ir elektronikos fakultetas');
  console.table(printElecticityAndElectronicsStudents);
}
console.groupEnd();

console.groupCollapsed('4. Atspausdinti tik pirmo kurso studentus');
{
  const printFirstCourseStudents = students.filter(x => x.course === 1);
  console.table(printFirstCourseStudents);
}
console.groupEnd();

console.groupCollapsed('5. Atspausdinti tik antro kurso studentus');
{
  const printSecondCourseStudents = students.filter(x => x.course === 2);
  console.table(printSecondCourseStudents);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinti tik trečio kurso studentus');
{
  const printThirdCourseStudents = students.filter(x => x.course === 3);
  console.log(printThirdCourseStudents);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinti tik ketvirto kurso studentus');
{
  const printFourthCourseStudents = students.filter(x => x.course === 4);
  console.log(printFourthCourseStudents);
}
console.groupEnd();

console.groupCollapsed('8. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius');
{
  const studentsAvg = students.map((student) => student.modules.reduce(
    (prevSum, module) => prevSum + module.marks.reduce((prevSum, mark) => prevSum + mark) / module.marks.length * module.credits,
    0)
    / student.modules.reduce((sum, module) => sum + module.credits, 0));

  console.log(studentsAvg);
}

console.groupCollapsed('9. Atspausdinti visų Informatikos fakulteto studentų vidurkius');
{
  const studentsOfInformaticsFacultyAvg = students.filter(student => student.faculty === 'Informatikos fakultetas')
    .map(student => student.modules.reduce(
      (prevSum, module) => prevSum + module.marks.reduce(
        (prevSum, mark) => prevSum + mark) / module.marks.length * module.credits, 0)
      / student.modules.reduce((sum, module) => sum + module.credits, 0));

  console.log(studentsOfInformaticsFacultyAvg);
}
console.groupEnd();

console.groupCollapsed('10. Atspausdinti visų Chemijos fakulteto studentų vidurkius');
{
  const studentsOfChemistryFacultyAvg = students.filter(student => student.faculty === 'Chemijos fakultetas')
    .map(student => student.modules.reduce((prevSum, module) => prevSum + module.marks.reduce((prevSum, mark) => prevSum + mark) / module.marks.length * module.credits, 0)
      / student.modules.reduce((sum, module) => sum + module.credits, 0));

  console.log(studentsOfChemistryFacultyAvg);
}
console.groupEnd();

console.groupCollapsed('11. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius');
{
  const studentsOfElecticityAndElectronicsFacultyAvg = students.filter(student => student.faculty === "Elektros ir elektronikos fakultetas").map(student => student.modules.reduce(
    (prevSum, module) => prevSum + module.marks.reduce(
      (prevSum, mark) => prevSum + mark) / module.marks.length * module.credits, 0)
    / student.modules.reduce(
      (sum, module) => sum + module.credits, 0));

  console.log(studentsOfElecticityAndElectronicsFacultyAvg);
}
console.groupEnd();
