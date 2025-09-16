import Personaje from "./Personaje.js";
class Arquera extends Personaje {
    constructor(nivel = 1, inventario = []) {
        super("Mérida", nivel, 40, 90, 110, "Tiro Certero", "Arco Encantado", inventario);
        this.precision = 85;
    }

    dispararFlecha() {
        console.log(`${this.nombre} dispara una flecha con ${this.precision}% de precisión.`);
        return this.ataque + 20;
    }
}