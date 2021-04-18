// 1.
class Student {
  constructor (university, course, fullName, marks = []) {
    this.university = university, 
    this.course = course,
    this.fullName = fullName,
    this.marks = marks,
    this.studentDismiss = true;
  };


  // 2.
  
      get getInfo() {

      return (`Студент ${this.course}-го курсу,  університету ${this.university} м.Одеса, ${this.name}`)
    };

  // 3.

    get getMarks(){
      if (this.studentDismiss === false) {

         return this.marks
      }
    };


  // 4.

    set setMarks(mark) {

      if (this.studentDismiss === false) {

        return this.marks.push(mark)
    }
  };
    
    getAverageMark() {
      return this.marks.reduce((sum, numb) => sum + numb) / this.marks.length;
    };

  // 6.

    studentDismiss() {
    this.studentDismiss === false
    console.log("Студента виключено!");
    };

  // 7.

    studentRecover() {
    this.studentDismiss === true
    console.log("Студента поновлено!");
    }
};


 // Advanced 

    class BudgetStudent extends Student{
      constructor(university, course, fullName, marks, studentDismiss){
        super(university, course, fullName, marks, studentDismiss);
      setInterval( () =>  this.schoolarShip(), 3000 )
    };
    


    schoolarShip(){
    const studentMark = 4;

    if( studentMark < this.getAverageMark() && this.studentDismiss === true){
      console.log ( `Ви отримали 1400 грн. стипендії` )

    } 
      console.log ( `Ви не отримали стипендії :( `);
    }
  };

  

  const ostap = new Student (`Вища Школи Психотерапії м.Одеса`, `1`, `Остап Бендер`,  [5, 4, 5, 4]);
  ostap.setMarks = 5;
  const petro = new BudgetStudent (`Вища Школи Журналістики м.Вінниця`, 3, `Петро`, [5, 4, 4, 5]);
  petro.setMarks = 5;
  
    console.log(ostap.getInfo);
    console.log(petro.getInfo);
    console.log(petro.schoolarShip());

