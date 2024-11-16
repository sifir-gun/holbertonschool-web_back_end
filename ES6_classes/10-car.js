export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Méthode cloneCar
  cloneCar() {
    const CloneConstructor = Object.getPrototypeOf(this).constructor;
    return new CloneConstructor();
  }
}
