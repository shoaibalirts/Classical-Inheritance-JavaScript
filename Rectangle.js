class Rectangle {
  height;
  width;
  constructor(h, w) {
    this.height = h;
    this.width = w;
  }

  getArea() {
    return this.height * this.width;
  }
}
