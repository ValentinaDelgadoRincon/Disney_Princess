class Villano extends Personaje{
    constructor(nombre,nivel,poder,ataque,vida,habilidadEspecial,objetoMagico,inventario,debilidad,nivelPeligro,resistencia){
        super(nombre,nivel,poder,ataque,vida,habilidadEspecial,objetoMagico,inventario);
        this.debilidad=debilidad;
        this.nivelPeligro=nivelPeligro;
        this.resistencia=resistencia;
    }

    usarPoder(objetivo){
    let danio = this.poder + this.ataque + this.habilidadEspecial + this.nivelPeligro - this.resistencia;
    danio = Math.max(0, danio); 
    objetivo.recibirDanio(danio);
    console.log(`${this.nombre} usa su poder maligno y causa ${danio} de daño a ${objetivo.nombre}`);
}

}