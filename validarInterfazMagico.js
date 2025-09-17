function validarIMagico(objeto){
    if(typeof objeto.usarMagia !=="function"|| typeof objeto.recargarMagia !=="function"){
        throw new Error("No se implementa bien IMagico")
    }
}

module.exports=validarIMagico;