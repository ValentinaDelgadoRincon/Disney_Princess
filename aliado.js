const Personaje = require("./Personaje");

class Aliado extends Personaje{
    constructor(nombre, nivel, poder, ataque, vida, habilidadEspecial, objetoMagico, inventario,experiencia,confianza){
        super(nombre, nivel, poder, ataque, vida, habilidadEspecial, objetoMagico, inventario);
        this.experiencia=experiencia;
        this.confianza=confianza;
    }

     usarPoder(princesa) {
        console.log(`${this.nombre} ha usado su poder para ayudar a: ${princesa.nombre}`);
    }
    recibirDanio(danio) {
        this.vida -= danio;
        if (this.vida <= 0) {
            console.log(`${this.nombre} ha sido derrotado`)
        } else {
            console.log(`${this.nombre} recibió ${danio} de daño, le quedan ${this.vida} de vida`);
        }
    }

    causarDanio(villano) {
        let danio = this.ataque +this.poder + this.objetoMagico;
        villano.recibirDanio(danio);
        console.log(`${this.nombre} causó ${danio} de daño a ${villano.nombre}`)
    }

    curarse(cantidad){
        this.vida = Math.min(this.vida + cantidad,100);
        if(this.vida === 100){
            console.log("Ya tienes la vida completa, no puedes curate más");
        }else{
            console.log(`${this.nombre} ha recuperado ${cantidad} de vida, ahora tiene ${this.vida}`)
        }
    }

    subirNivel(){
        if(this.experiencia >= 100){
            this.nivel+=1;
            this.experiencia -=100;
            console.log(`${this.nombre} ha subido al nivel ${this.nivel}`);
        }
    }

    darConsejo(){
        if(this.vida <= 10){
            console.log("Vamoss");
        }
        
    }

    ayudar(villano){
        this.causarDanio(villano);
    }

}

module.exports =Aliado;