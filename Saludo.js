module.exports = class Saludo {
  nombre;

  constructor(nombre) {
    this.nombre = nombre;
  }
  
  saluda() {
    console.info(`Hola ${this.nombre}!`);
  }
};
