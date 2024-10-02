import Teacher from "./Teacher.js";
import Student from "./Student.js";
const henrick = new Teacher("Henrick", 1, "Teacher", "meeting", "Male");
const mette = new Student("Mette", 2, "Student", "meeting", "Female");

const people = [henrick, mette];

let peopleNewArray = people.map((item) => {
  return `<tr>
  <td>${item.name}</td>
  <td>${item.id}</td>
  <td>${item.designation}</td>
  <td>${item.extraJob}</td>
  <td>${item.sex}</td>
  </tr>`;
});
console.log(peopleNewArray);

const TABLE_DYNAMIC_DATA = document.getElementById("dynamicData");
TABLE_DYNAMIC_DATA.insertAdjacentHTML("afterbegin", peopleNewArray.join(""));

// const TEACHER_SECTION = document.getElementById("teacherInfo");
// const NAME = document.getElementsByName("teacher-name");
// console.log(NAME);

// TEACHER_SECTION.append(
//   t1.teacherName +
//     " has an id# " +
//     t1.teacherID +
//     " and has primary function to " +
//     t1.teacherPremierAssignment +
//     " and has some extra functions to perform e.g. " +
//     t1.teacherExtraOpgave
// );

let text = henrick.getHuman();
console.log(text);
text = mette.getHuman();
console.log(text);

function getTeacherData() {
  console.log("hello");
}
