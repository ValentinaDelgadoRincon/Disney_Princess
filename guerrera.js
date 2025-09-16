import Personaje from "./Personaje.js";

class Guerrera extends Personaje {
    constructor(nivel = 1, inventario = []) {
        super("Mulán", nivel, 60, 100, 130, "Espíritu del Dragón", "Espada Imperial", inventario);
        this.valentia = 90;
    }

    ataqueEspada() {
        console.log(`${this.nombre} realiza un ataque con su espada.`);
        return this.ataque + 15;
    }
} 