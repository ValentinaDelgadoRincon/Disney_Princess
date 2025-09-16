class IMagico{
    usarMagia(){
        throw new Error("No se puede implementar 'usarMagia()'")
    }

    recargarMagia(){
        throw new Error("No se puede implementar 'recargarmagia()'")
    }
}

module.exports=IMagico;