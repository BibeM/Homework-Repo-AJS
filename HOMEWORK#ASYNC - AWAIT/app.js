console.log("It works!");
/*
Requirements
Using only async/await syntax fetch the students from this endpoing "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"

After you have the data display the following informations in the HTML

ONLY USE HIGHER ORDER FUNCTIONS
USE AYSNC/AWAIT
DO NOT MUTATE OR CHANGE OR SORT THE ORIGINAL DATA
COPIES OF THE ORIGINAL DATA ARE ALLOWED
Show the average age and average grade of all students combined
Show the number of students that are over 60 and the number of students that are under 30 years old
Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above
Find the student named Arthur Cadore and display all of his information
Find the oldest and youngest student and display their information on the screen
Show a list of the full names of students that have a last name longer than 8 characters
Show a list of the top 10 best students by average grade
Show on the screen if some users have an average grade of 1 or if all users are adults ( above 18)
*/

const fetchStudents = async () => {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
    );
    const data = await res.json();
    console.log(data);
    printAverageAgeAverageGrade(data);
    printOldYoungStudents(data);
    printListGoodStudentsOverThirty(data);
    printOneStudentInformation(data);
    printOldestYoungestStudent(data);
    printLongLastNames(data);
    printTenBestStudents(data);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong in fetch users");
  }
};
fetchStudents();
const printAverageAgeAverageGrade = (students) => {
  const averageAgeArr = students.map((student) => student.age);
  console.log(averageAgeArr);
  const averageAge =
    averageAgeArr.reduce((acc, el) => acc + el, 0) / averageAgeArr.length;
  console.log(averageAge);
  const averageGradeArr = students.map((student) => student.averageGrade);
  console.log(averageGradeArr);
  const averageGrade =
    averageGradeArr.reduce((acc, el) => acc + el, 0) / averageGradeArr.length;
  console.log(averageGrade);
  document.querySelector(
    ".first"
  ).innerText = `Average age of all students is: ${averageAge} and the average grades for all students is: ${averageGrade}`;
};
const printOldYoungStudents = (students) => {
  const oldStudents = students.filter((student) => student.age > 60);
  console.log(oldStudents);
  const youngStudents = students.filter((student) => student.age < 30);
  console.log(youngStudents);
  document.querySelector(
    ".second"
  ).innerText = `Number of student over 60 is: ${oldStudents.length} and number of students under 30 is: ${youngStudents.length}`;
};
const printListGoodStudentsOverThirty = (students) => {
  const goodStudentsOverThirty = students.filter(
    (student) => student.age > 30 && student.averageGrade >= 4
  );
  console.log(goodStudentsOverThirty);
  const studentListOne = document.querySelector(".student-list");
  studentListOne.innerHTML = goodStudentsOverThirty
    .map(
      (student) =>
        `<li>First name: ${student.firstName}, Last name: ${student.lastName}, City: ${student.city}</li>`
    )
    .join("");
};
const printOneStudentInformation = (students) => {
  const oneStudent = students.find(
    (student) => student.firstName === "Arthur" && student.lastName === "Cadore"
  );
  console.log(oneStudent);

  document.querySelector(
    ".third"
  ).innerText = `Id:${oneStudent.id}, First name:${oneStudent.firstName}, Last name:${oneStudent.lastName}, City:${oneStudent.city}, Age:${oneStudent.age}, Average grade:${oneStudent.averageGrade}, Email:${oneStudent.email}, Gender:${oneStudent.gender},`;
};

const printOldestYoungestStudent = (students) => {
  const newStudents = students.map((student) => student.age);
  console.log(Math.max(...newStudents));
  console.log(Math.min(...newStudents));
  const oldStudent = students.find((student) => student.age === 42);
  console.log(oldStudent);
  const youngStudent = students.find((student) => student.age === 12);
  console.log(youngStudent);

  document.querySelector(
    ".fourth"
  ).innerHTML = `THE OLDEST STUDENT IS : Id:${oldStudent.id}, First name:${oldStudent.firstName}, Last name:${oldStudent.lastName}, City:${oldStudent.city}, Age:${oldStudent.age}, Average grade:${oldStudent.averageGrade}, Email:${oldStudent.email}, Gender:${oldStudent.gender},<br>
  THE YOUNGEST STUDENT IS : Id:${youngStudent.id}, First name:${youngStudent.firstName}, Last name:${youngStudent.lastName}, City:${youngStudent.city}, Age:${youngStudent.age}, Average grade:${youngStudent.averageGrade}, Email:${youngStudent.email}, Gender:${youngStudent.gender}`;
};

const printLongLastNames = (students) => {
  const longLastnames = students.filter(
    (student) => student.lastName.length > 8
  );
  console.log(longLastnames);
  document.querySelector(".long-lastname").innerHTML = longLastnames
    .map((student) => `<li>${student.firstName} ${student.lastName}</li>`)
    .join("");
};
const printTenBestStudents = (students) => {
  const newStudents = [...students];
  console.log(newStudents);
};
