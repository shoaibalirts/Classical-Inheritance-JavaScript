import Teacher from "./Teacher.js";
const t1 = new Teacher("Henrick", 1, "meeting");
const TEACHER_SECTION = document.getElementById("teacherInfo");

TEACHER_SECTION.append(
  t1.teacherName +
    " has an id# " +
    t1.teacherID +
    " and has primary function to " +
    t1.teacherPremierAssignment +
    " and has some extra functions to perform e.g. " +
    t1.teacherExtraOpgave
);

function getTeacherData() {
  console.log("hello");
}
