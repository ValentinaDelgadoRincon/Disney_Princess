const Personaje = require('./personaje');

class Curandera extends Personaje {
    constructor(nivel = 1, inventario = []) {
        super("Rapunzel", nivel, 70, 30, 100, "Cabello Sanador", "Flor Mágica", inventario);
        this.poderSanacion = 50;
        this.experiencia = 0;
    }

    sanarAliado(aliado) {
        if (typeof aliado.curarse === "function") {
            aliado.curarse(this.poderSanacion);
            console.log(`${this.nombre} sana a ${aliado.nombre} con ${this.poderSanacion} puntos de vida.`);
            this.experiencia += 20;
        } else {
            console.log(`${aliado.nombre} no puede ser sanado.`);
        }
    }

    subirNivel() {
        if (this.experiencia >= 100) {
            this.nivel += 1;
            this.poderSanacion += 15;
            this.vida += 20;
            this.experiencia -= 100;
            console.log(`${this.nombre} ha subido al nivel ${this.nivel}, aumentando su poder de sanación y su vida.`);
        }
    }
}

module.exports = Curandera;
