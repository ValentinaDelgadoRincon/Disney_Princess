const Personaje = require('./personaje');
const IMagico = require('./IMagico');

class Maga extends Personaje{
    constructor(nivel = 1, inventario = []) {
        super("Elsa", nivel, 20, 10, 100, "congelamiento", "copo de nieve", inventario);
        this.magia = 30;
        this.experiencia = 0;
    }
    usarPoder() {
        console.log(`${this.nombre} ha usado su poder `);
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
        let danio = this.ataque +this.poder + this.magia;
        villano.recibirDanio(danio);
        console.log(`${this.nombre} causó ${danio} de daño a ${villano.nombre}`)
    }

    curarse(cantidad){
        this.vida = Math.min(this.vida + cantidad, 100);
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

    usarMagia(villano){
        let danio= this.poder + 30;
        villano.recibirDanio(danio)
        console.log(`${this.nombre} usa magia contra ${villano.nombre} y causa ${danio}`)
    }

    recargarMagia(){
        this.magia=100;
        console.log(`${this.nombre} recargó su magia al máximo`)
    }
}

module.exports=Maga;