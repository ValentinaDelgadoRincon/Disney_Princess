import Personaje from "./Personaje.js";

class Curandera extends Personaje {
    constructor(nivel = 1, inventario = []) {
        super("Rapunzel", nivel, 70, 30, 100, "Cabello Sanador", "Flor Mágica", inventario);
        this.poderSanacion = 50;
    }

    sanarAliado(aliado) {
        aliado.recibirCuracion(this.poderSanacion);
        console.log(`${this.nombre} sana a ${aliado.nombre} con ${this.poderSanacion} puntos de vida.`);
    }
}