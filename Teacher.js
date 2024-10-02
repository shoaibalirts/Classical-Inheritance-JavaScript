export default class Teacher {
  teacherName = "";
  teacherID;
  teacherPremierAssignment = "teach";
  teacherExtraOpgave = null;
  constructor(name, id, extraOpgave) {
    this.teacherName = name;
    this.teacherId = id;
    this.teacherExtraOpgave = extraOpgave;
  }
}
