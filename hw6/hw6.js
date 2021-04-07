const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

// // #1
// getSubjects(students)[0] --> ["Math", "Algorithms", "Data science"];

function getSubjects(students) {
  const subjectsKeys = Object.keys(students.subjects);
  const result = subjectsKeys.map((subject) => {

    return (subject[0].toUpperCase() + subject.slice(1)).replaceAll('_', ' ');
  });

  return result;
}console.log(`cписок предметів для студента: ${students[0].name}, ${getSubjects(students[0])}`);

// #2
// getAverageMark(students[0]) --> 3.79

const getAverageMark = (students) => {
  const allMarks = Object.values(students.subjects).flat(1);

  return (allMarks.reduce((sum, mark) => sum + mark) / allMarks.length).toFixed(2);
}
console.log('середня оцінка по всім предметам:' ,getAverageMark(students[0]));

//  Ex#3
// getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79}
 const getStudentInfo = (students) => {

  return{
    course: students.course,
    name: students.name,
    averageMark: getAverageMark(students)
  };
 };
 console.log('Загальна інформація по студенту:' ,getStudentInfo(students[0]))

//  Ex#4
// getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]

function getStudentsNames(students) {
  const names = students.map(element => element.name);

  return names.sort();
};
console.log("імена студентів в алфавітному порядку:" ,getStudentsNames(students));

// Ex#5
// getBestStudent(students) --> "Anton"

function getBestStudent (students) {
    let bestStudent = '';
    let bestMark = 0;

    for (const key in students) {                              
    const studentsMark = getAverageMark(students[key]);    

    if(studentsMark > bestMark) {
      bestStudent = students[key].name;
    } 
  }

    return bestStudent;
}
console.log(`кращий студент: ${getBestStudent(students)}`);


// Ex#6
// calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 }

function calculateWordLetters(string) {
  const arrString = string.split('');
  const result = arrString.reduce((prev, current) => {
    prev[current] = (prev[current] || 0) +1;

    return prev;
  },{});

    return result;
};
console.log(calculateWordLetters('тест'));