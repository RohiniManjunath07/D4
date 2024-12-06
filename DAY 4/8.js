class Student {
    constructor(personalDetails, studentDetails, adminDetails) {
      this.personalDetails = personalDetails;
      this.studentDetails = studentDetails;
      this.adminDetails = adminDetails;
    }
  }
  
  class StudentManagementSystem {
    constructor() {
      this.students = [];
    }
  
    addStudent(personalDetails, studentDetails, adminDetails) {
      const newStudent = new Student(personalDetails, studentDetails, adminDetails);
      this.students.push(newStudent);
      console.log("Student added successfully!");
    }
  
    deleteStudent(rollNumber) {
      const index = this.students.findIndex((student) => student.studentDetails.rollNumber === rollNumber);
      if (index !== -1) {
        this.students.splice(index, 1);
        console.log("Student deleted successfully!");
      } else {
        console.log("Student not found!");
      }
    }
  
    displayStudents() {
      const studentsList = document.getElementById("students-list");
      studentsList.innerHTML = "";
      this.students.forEach((student, index) => {
        const studentDetailsHTML = `
          <div class="student-details">
            <h2 class="student-name">${student.personalDetails.name}</h2>
            <p class="student-roll-number">Roll Number: ${student.studentDetails.rollNumber}</p>
            <p class="student-department">Department: ${student.studentDetails.department}</p>
            <p class="student-admin-number">Admin Number: ${student.adminDetails.adminNumber}</p>
          </div>
        `;
        studentsList.innerHTML += studentDetailsHTML;
      });
    }
  }
  
  const sms = new StudentManagementSystem();
  
  document.getElementById("add-student-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const rollNumber = document.getElementById("roll-number").value;
    const department = document.getElementById("department").value;
    const adminNumber = document.getElementById("admin-number").value;
    const personalDetails = { name, email: "" };
    const studentDetails = { rollNumber, department };
    const adminDetails = { adminNumber };
    sms.addStudent(personalDetails, studentDetails, adminDetails);
    document.getElementById("add-student-form").reset();
  });
  
  document.getElementById("display-students-btn").addEventListener("click", () => {
    sms.displayStudents();
  });
  
  document.getElementById("delete-student-btn").addEventListener("click", () => {
    const rollNumber = prompt("Enter the roll number of the student to delete:");
    if (rollNumber) {
      sms.deleteStudent(rollNumber);
    }
  });