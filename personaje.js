class Personaje{
    #nombre
    #nivel
    #poder
    #ataque
    #vida
    #habilidadEspecial
    #objetoMagico
    #invetario
    
    constructor(nombre,nivel,poder,ataque,vida,habilidadEspecial,objetoMagico,inventario){
        if(this.constructor === Personaje){
            throw new Error("No se puede instanciar la clase Personaje");
        }
        this.#nombre=nombre;
        this.#nivel=nivel;
        this.#poder=poder;
        this.#ataque=ataque;
        this.#vida=vida;
        this.#habilidadEspecial=habilidadEspecial;
        this.#objetoMagico=objetoMagico;
        this.#invetario=inventario;
    }
    
    get nombre(){
        return this.#nombre;
    }

    get nivel(){
        return this.#nivel;
    }

    get poder(){
        return this.#poder;
    }

    get ataque(){
        return this.#ataque;
    }

    get vida(){
        return this.#vida;
    }
    
    get habilidadEspecial(){
        return this.#habilidadEspecial;
    }

    get objetoMagico(){
        return this.#objetoMagico;
    }

    get inventario(){
        return this.#invetario;
    }

    set vida(valor){
        this.#vida = Math.max(0,Math.min(valor,100))
    }

    set nivel(valor){
        this.#nivel = Math.max(1,valor)
    }

    usarPoder(){
        throw new Error("El método debe implementarse en las clases hijas")
    }

    recibirDanio(){
        throw new Error("El método debe implementarse en las clases hijas")
    }

    causarDanio(){
        throw new Error("El método debe implementarse en las clases hijas")
    }

    curarse(){
        throw new Error("El método debe implementarse en las clases hijas")
    }

    subirNivel(){
        throw new Error("El método debe implementarse en las clases hijas")
    }
}

module.exports= Personaje;