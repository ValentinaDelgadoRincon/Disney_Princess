const Personaje = require('./Personaje');
class Villano extends Personaje {
    constructor(nombre, nivel, poder, ataque, vida, habilidadEspecial, objetoMagico, inventario, debilidad, nivelPeligro, resistencia) {
        super(nombre, nivel, poder, ataque, vida, habilidadEspecial, objetoMagico, inventario);
        this.debilidad = debilidad;
        this.nivelPeligro = nivelPeligro;
        this.resistencia = resistencia;
        this.experiencia = 0;
    }

    usarPoder() {
        console.log(`${this.nombre} ha usado su poder maligno`);
    }
    recibirDanio(danio) {
        const calculoResistencia= Math.max(0,danio - this.resistencia);
        this.vida -= calculoResistencia;
        if (this.vida <= 0) {
            console.log(`${this.nombre} ha sido derrotado`)
        } else {
            console.log(`${this.nombre} recibió ${danio} de daño, le quedan ${this.vida} de vida`);
        }
    }

    causarDanio(princesa) {
        let danio = this.ataque +this.poder + this.objetoMagico;
        princesa.recibirDanio(danio);
        console.log(`${this.nombre} causó ${danio} de daño a ${princesa.nombre}`)
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
}

module.exports=Villano;