const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

/* #1
Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. 
У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]]; 
*/
function getPairs (students){
  const boys = [students[0],students[1],students[4]];
  const girls = [students[2],students[3],students[5]];
  let pairsForMarch8 = [];
  for (i = 0; i < boys.length; i++) {
    pairsForMarch8[i] = [boys[i], girls[i]]
  }
  return pairsForMarch8;
}
const pairsStudents = getPairs(students);
console.log(pairsStudents);

/* #2
Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
 Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
 */
function getPairsWithThemes (pairsStudents, themes){
  let studentsThemes = [];
  for (let i = 0; i < themes.length; i++) {
     studentsThemes[i] = pairsStudents[i].join(" i ").split(",");
     studentsThemes[i].push(themes[i]);
  }
  return studentsThemes;
}
const pairsStudentsWithThemes = getPairsWithThemes(pairsStudents,themes);
console.log(pairsStudentsWithThemes);

/* #3
Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
*/
function getMarksWithStudents(students, marks){
  let studentsMarks = [];
  for (let i = 0; i < marks.length; i++) {
    studentsMarks[i] = [students[i], marks[i]];
  }
  return studentsMarks;
}
const studentsMarks2 = getMarksWithStudents(students, marks);
console.log(studentsMarks2);

/* #4
Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив):
 [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]
 */
 function getPairsRandomMarks (pairsStudents, themes){
    let randomMarks = [];
    for (let i = 0; i < pairsStudents.length; i++) {
       let mark = Math.ceil(Math.random() * 5);
      randomMarks[i] = [pairsStudents[i].join(' i '), themes[i], mark];
      
    } 
    return randomMarks;
 }
 const marksRandom = getPairsRandomMarks (pairsStudents, themes)
  console.log(marksRandom);




