const Personaje = require('./personaje');

class Guerrera extends Personaje {
    constructor(nivel = 1, inventario = []) {
        super("Mulán", nivel, 60, 100, 130, "Espíritu del Dragón", "Espada Imperial", inventario);
        this.valentia = 90;
        this.experiencia = 0;
    }

    ataqueEspada(villano) {
        let danio = this.ataque + Math.floor(this.valentia / 5);
        villano.recibirDanio(danio);
        console.log(`${this.nombre} realiza un ataque con su espada y causa ${danio} de daño a ${villano.nombre}.`);
        this.experiencia += 15;
    }

    subirNivel() {
        if (this.experiencia >= 100) {
            this.nivel += 1;
            this.ataque += 20;
            this.valentia += 10;
            this.vida += 25;
            this.experiencia -= 100;
            console.log(`${this.nombre} ha subido al nivel ${this.nivel}, mejorando su ataque, valentía y vida.`);
        }
    }

    inspirarAliados(aliados = []) {
        aliados.forEach(aliado => {
            if (aliado && aliado.nivel) {
                aliado.nivel += 1;
                console.log(`${this.nombre} inspira a ${aliado.nombre}, subiendo su nivel a ${aliado.nivel}.`);
            }
        });
    }
}

module.exports = Guerrera;

