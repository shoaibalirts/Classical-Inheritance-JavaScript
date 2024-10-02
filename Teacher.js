export default class Teacher {
  teacherName;
  teacherID;
  teacherPremierAssignment = "teach";
  teacherExtraOpgave = null;
  constructor(name, id, extraOpgave) {
    this.teacherName = name;
    this.teacherID = id;
    this.teacherExtraOpgave = extraOpgave;
  }
}
