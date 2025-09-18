const ObjetoMagico = require("./objetoMagico");

class Inventario {
    constructor() {
        this.objetos = [];
    }


    anadirObjeto(objeto) {
        if (objeto instanceof ObjetoMagico) {
            this.objetos.push(objeto);
            console.log(`Se añadió el objeto mágico "${objeto.nombre}" al inventario.`);
        } else {
            console.log("Solo se pueden añadir objetos de tipo ObjetoMagico.");
        }
    }


    usarObjeto(nombreObjeto, personaje) {
        const objeto = this.objetos.find(obj => obj.nombre === nombreObjeto);
        if (objeto) {
            objeto.activarEfecto(personaje);
            if (objeto.durabilidad <= 0) {
                this.eliminarObjeto(nombreObjeto);
            }
        } else {
            console.log(`El objeto "${nombreObjeto}" no está en el inventario.`);
        }
    }

    eliminarObjeto(nombreObjeto) {
        const index = this.objetos.findIndex(obj => obj.nombre === nombreObjeto);
        if (index !== -1) {
            const eliminado = this.objetos.splice(index, 1);
            console.log(`Se eliminó el objeto mágico "${eliminado[0].nombre}" del inventario.`);
        } else {
            console.log(`El objeto "${nombreObjeto}" no se encontró en el inventario.`);
        }
    }

    // Listar todos los objetos en el inventario
    listarObjeto() {
        if (this.objetos.length === 0) {
            console.log("El inventario está vacío.");
        } else {
            console.log("Objetos en el inventario:");
            this.objetos.forEach((obj, index) => {
                console.log(`${index + 1}. ${obj.nombre} (Efecto: ${obj.efecto}, Durabilidad: ${obj.durabilidad}, Potencia: ${obj.potencia})`);
            });
        }
    }
}

module.exports = Inventario;
