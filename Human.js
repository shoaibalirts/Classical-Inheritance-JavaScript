export default class Human {
  name = null;
  id = null;
  designation = null;
  extraJob = null;
  sex = null;
  constructor(name, id, designation, extraJob, sex) {
    this.name = name;
    this.id = id;
    this.designation = designation;
    this.extraJob = extraJob;
    this.sex = sex;
  }
  run() {
    console.log("Weeeeeeeeeee");
  }
  getHuman() {
    return (
      this.name +
      " has an ID# " +
      this.id +
      " , who is a " +
      this.designation +
      ", and used to do a lot of " +
      this.extraJob +
      "s" +
      "-" +
      this.sex
    );
  }
}
