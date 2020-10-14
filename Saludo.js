module.exports = class Saludo {
  nombre;
  apellido;

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido
  }
  
  saluda() {
    console.info(`Hola ${this.nombre} ${this.apellido}!`);
  }
};
