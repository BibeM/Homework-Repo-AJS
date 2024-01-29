console.log("It works!");
/*
There is a JSON file with students. Make a call to the file and get the following data from it:

All students with an average grade higher than 3
All female student names with an average grade of 5
All male student full names who live in Skopje and are over 18 years old
The average grades of all female students over the age of 24
All male students with a name starting with B and average grade over 2
Use higher order functions to find the answers Link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json
*/
const STUDENTS_API =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

function students() {
  fetch(STUDENTS_API)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      const filteredStudentsAverageGrade = data.filter(
        (student) => student.averageGrade > 3
      );
      console.log(filteredStudentsAverageGrade);
      const filteredStudentsFemaleAverageGrade = data
        .filter((student) => (student.gender = "female"))
        .filter((student) => student.averageGrade === 5)
        .map((student) => `${student.firstName}`);
      console.log(filteredStudentsFemaleAverageGrade);
      const filteredStudentsMaleSkopjeAdult = data
        .filter((student) => (student.gender = "male"))
        .filter((student) => (student.city = "Skopje"))
        .filter((student) => student.age > 18)
        .map((student) => `${student.firstName} ${student.lastName}`);
      console.log(filteredStudentsMaleSkopjeAdult);
      const filteredStudentsAverageGradesFemaleOverTwentufour = data
        .filter((student) => (student.gender = "female"))
        .filter((student) => student.age > 24)
        .map((student) => `${student.averageGrade}`);
      console.log(filteredStudentsAverageGradesFemaleOverTwentufour);
      const filteredStudentsMaleStartsBAverageGradeOverTwo = data
        .filter((student) => student.averageGrade > 2)
        .filter((student) => (student.gender = "male"))
        .filter((student) => student.firstName.includes("B"));
      console.log(filteredStudentsMaleStartsBAverageGradeOverTwo);
    });
}
students();
