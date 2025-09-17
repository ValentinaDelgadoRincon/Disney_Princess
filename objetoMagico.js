class ObjetoMagico {
    constructor(nombre, efecto, durabilidad = 1, potencia = 0) {
        this.nombre = nombre;
        this.efecto = efecto;        
        this.durabilidad = durabilidad; 
        this.potencia = potencia;    
    }

    activarEfecto(personaje) {
        if (this.durabilidad <= 0) {
            console.log(`El objeto mágico ${this.nombre} ya no tiene usos disponibles.`);
            return;
        }

        console.log(`${personaje.nombre} activa el objeto mágico "${this.nombre}" (${this.efecto}).`);

        switch (this.efecto.toLowerCase()) {
            case "curación":
                personaje.curarse(this.potencia);
                break;
            case "ataque extra":
                personaje.causarDanio = (villano) => {
                    let danio = personaje.ataque + this.potencia;
                    villano.recibirDanio(danio);
                    console.log(`${personaje.nombre} usa ${this.nombre} y causa ${danio} de daño extra a ${villano.nombre}.`);
                };
                break;
            case "poder extra":
                personaje.usarPoder();
                personaje.poder += this.potencia;
                console.log(`${personaje.nombre} aumenta su poder en ${this.potencia}.`);
                break;
            default:
                console.log(`El efecto "${this.efecto}" no está implementado aún.`);
        }

        this.durabilidad--;
    }
}

module.exports = ObjetoMagico;
