function result() {
    class Person {
      constructor(name, email) {
        this.name = name;
        this.email = email;
      }
      toString(){
        return new Person(this.name, this.email)
      }
    }
  
    class Teacher extends Person {
      constructor(name, email,course) {
        super(name, email);
        this.course = course;
      }
      toString(){
        return new Teacher(this.name, this.email, this.course)
      }
    }
    class Student extends Person {
        constructor(name,email,subject){
            super(name,email);
            this.subject = subject
        }
        toString(){
          return new Student(this.name, this.email, this.subject)
        }
    }
    return {
      Person,
      Teacher,
      Student
    }
  }

  let classes = result();
  let Person = classes.Person;
  let Teacher = classes.Teacher;
  let Student = classes.Student;
  
  let p = new Teacher("Pesho",'Pesho@pesh.com', 'example');
  console.log(p.toString())