// 1.
class Student {
  Constructor (university, course, fullName, marks = []) {
    this.university = university, 
    this.course = course,
    this.fullName = fullName,
    this.marks = marks,
    this.dismiss = true;
  };


  // 2.
  
    getInfo() {

      return `Студент ${this.course} курсу ${this.university} м.Одеса, ${this.name}`
    };

  // 3.

    get getMarks(){
         return this.marks
      };


  // 4.

    set setMarks(mark) {

      if (this.dismiss === false) {

        return this.marks.push(mark)
    }
  };
    
    getAverageMark() {
      return this.marks.reduce((sum, numb) => sum + numb) / this.marks.length;
    };

  // 6.

  studentDismiss() {
    this.dismiss === false
    console.log("Студента виключено!");
  };

  // 7.

  studentRecover() {
    this.dismiss === true
    console.log("Студента поновлено!");
  }
};


 // Advanced 

    class BudgetStudent extends Student{
      constructor(university, course, fullName, dismiss){
        super(university, course, fullName, dismiss);
      setInterval(() => {this.schoolarShip()
      }, 3000)
    };
    


  schoolarShip(){
    const studentMark = 4;

    if( studentMark < this.getAverageMark() && this.dismiss === false){
      console.log (` Ви отримали 1400 грн. стипендії `)

    } else {
      
      console.log ( `Ви не отримали стипендії :( `);
    }
  }
};

  const ostap = new BudgetStudent (`Вища Школи Психотерапії м.Одеса`, 1, `Остап Бендер`,  [5, 4, 4, 5]);
  ostap.setMarks = 5;
  const petro = new Student (`Вища Школи Журналістики м.Вінниця`, 3, `Петро`, [5, 4, 4, 5]);

  
    console.log(ostap.getInfo);
    console.log(petro.getInfo);
    console.log(petro.getScholarship());
