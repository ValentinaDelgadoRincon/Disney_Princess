const Personaje = require('./personaje');

class Arquera extends Personaje {
    constructor(nivel = 1, inventario = []) {
        super("Mérida", nivel, 40, 90, 110, "Tiro Certero", "Arco Encantado", inventario);
        this.precision = 85;
        this.experiencia = 0;
    }

    dispararFlecha(villano) {
        let danioBase = this.ataque + (this.precision / 10);
        villano.recibirDanio(danioBase);
        console.log(`${this.nombre} dispara una flecha con ${this.precision}% de precisión y causa ${danioBase} de daño a ${villano.nombre}.`);
    }

    subirNivel() {
        if (this.experiencia >= 100) {
            this.nivel += 1;
            this.ataque += 10;
            this.precision += 2;
            this.experiencia -= 100;
            console.log(`${this.nombre} ha subido al nivel ${this.nivel}, mejorando su ataque y precisión.`);
        }
    }
}

module.exports = Arquera;
