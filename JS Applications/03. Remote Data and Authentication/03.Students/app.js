window.addEventListener('load', extractStudents)


document.getElementById("submit").addEventListener("click", createStudent);
let targetTbody = document.querySelector('#results>tbody');
let inputs = document.querySelector('.inputs')
async function createStudent(e) {
  e.preventDefault();
  let currentStudent = {
    firstName:inputs.children[0].value,
    lastName: inputs.children[1].value,
    facultyNumber: inputs.children[2].value,
    grade: inputs.children[3].value
  }
    const response = await fetch(
      "http://localhost:3030/jsonstore/collections/students",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentStudent),
      })
      const data = await response.json();
      extractStudents()
  }
  async function extractStudents(){
    targetTbody.replaceChildren();
    const response = await fetch ('http://localhost:3030/jsonstore/collections/students');
    const data = await response.json();
    let values = Object.values(data);
    values.forEach(student => {
      let tr = document.createElement('tr');
      let firstname = document.createElement('td');
      firstname.textContent = student.firstName;

      let lastName = document.createElement('td');
      lastName.textContent = student.lastName;

      let facultyNumber = document.createElement('td');
      facultyNumber.textContent = student.facultyNumber;

      let grade = document.createElement('td');
      grade.textContent = student.grade;

      tr.appendChild(firstname)
      tr.appendChild(lastName)
      tr.appendChild(facultyNumber)
      tr.appendChild(grade)
      targetTbody.appendChild(tr)
    })
    
}
