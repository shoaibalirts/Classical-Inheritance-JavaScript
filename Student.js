import Human from "./Human.js";
export default class Student extends Human {
  constructor(name, id, designation, extraJob, sex) {
    super(name, id, designation, extraJob, sex);
  }
  primaryJob() {
    return "studying";
  }
}
