const inquirer = require('inquirer');
const Maga = require('./maga');
const Villano = require('./villano');
const Curandera = require('./curandera');
const Arquera = require('./arquera');
const Guerrera = require('./guerrera');
const ObjetoMagico = require('./objetoMagico');
const Inventario = require('./inventario')
const chalk = require('chalk');
let personajes = [];

function menu() {
    inquirer.prompt([{
        type: 'list',
        name: 'option',
        message: 'Bienvenido a nuestro juego, selecciona la opcionas que deseas hacer:',
        choices: [
            { name: "1. Crear personaje", value: "1" },
            { name: "2. Ver personajes", value: "2" },
            { name: "3. Iniciar batalla", value: "3" },
            { name: "4. Salir", value: "4" }
        ]
    }])
        .then((respuesta) => {
            switch (respuesta.option) {
                case "1":
                    crearPersonaje();
                    break;
                case "2":
                    verPersonajes();
                    break;
                case "3":
                    iniciarBatalla();
                    break;
                case "4":
                    console.log("Gracias por jugar...");
                    break;
            }
        })
}

function crearPersonaje() {

    const personajeTipo = {
        'Maga': ["Elsa"],
        'Arquera': ["Merida"],
        'Curandera': ["Rapunzel"],
        'Guerrera': ["Mulan"],
        'Villano': ["Maléfica", "Úrsula", "Jafar", "Madre Gothel"]
    }

    inquirer.prompt([{
        type: 'list',
        name: 'tipo',
        message: '¿Qué tipo de personaje deseas crear?',
        choices: ['Maga', 'Arquera', 'Curandera', 'Guerrera', 'Villano']

    }]).then((respuesta) => {
        const tipoSeleccionado = respuesta.tipo;
        const disponibles = personajeTipo[tipoSeleccionado];

        inquirer.prompt([{
            type: 'list',
            name: 'personajes',
            message: 'Escoge tu personaje:',
            choices: disponibles
        }, {
            type: 'list',
            name: 'objetoMagico',
            message: 'Elege un objeto mágico:',
            choices: ['copo de nieve', 'espada ancestral', 'arco y flecha', 'flor de loto', 'bastón mágico', 'vara de la serpiente']
        }]).then((personajeGuardado) => {
            const nivelInicial = 1;
            const poderInicial = 20;
            const ataqueInicial = 10;
            const vidaInicial = 100;
            let habilidadEspecial;
            switch (tipoSeleccionado) {
                case "Maga":
                    habilidadEspecial = "congelamiento";
                    break;
                case "Arquera":
                    habilidadEspecial = "Punteria";
                    break;
                case "Curandera":
                    habilidadEspecial = "Sanación";
                    break;
                case "Guerrera":
                    habilidadEspecial = "Fuerza, Precisión y Punteria";
                    break;
                case "Villano":
                    habilidadEspecial = "Magia oscura";
                    break;
                default:
                    habilidadEspecial = "Desconocida";
                    break;
            }
            let personajeSeleccionado;

            switch (tipoSeleccionado) {
                case "Maga":
                    personajeSeleccionado = new Maga(personajeGuardado.nivel); // instancia real
                    break;
                case "Arquera":
                    personajeSeleccionado = new Arquera(personajeGuardado.nivel);
                    break;
                case "Curandera":
                    personajeSeleccionado = new Curandera(personajeGuardado.nivel);
                    break;
                case "Guerrera":
                    personajeSeleccionado = new Guerrera(personajeGuardado.nivel);
                    break;
                case "Villano":
                    personajeSeleccionado = new Villano(
                        personajeGuardado.personajes,
                        nivelInicial,
                        poderInicial,
                        ataqueInicial,
                        vidaInicial,
                        "Magia oscura",
                        personajeGuardado.objetoMagico,
                        [],
                        "debilidad",
                        1,
                        10
                    );
                    break;
            }
            personajeSeleccionado.tipo = tipoSeleccionado;
            personajeSeleccionado.nombre = personajeGuardado.personajes;
            personajeSeleccionado.objetoMagico = personajeGuardado.objetoMagico;
            personajeSeleccionado.habilidadEspecial = habilidadEspecial;

            personajeSeleccionado.nivel = nivelInicial;
            personajeSeleccionado.poder = poderInicial;
            personajeSeleccionado.ataque = ataqueInicial;
            personajeSeleccionado.vida = vidaInicial;


            personajes.push(personajeSeleccionado);
            console.log("Personaje creado :)");
            menu();
        });

    })

};


function verPersonajes() {
    if (personajes.length === 0) {
        console.log("No hay personajes creados");
    } else {
        personajes.forEach((personaje, index) => {
            console.log(chalk.hex('#FF69B4')('====================================='));
            console.log(chalk.hex('#FF69B4')(`Tipo: ${personaje.tipo}`));
            console.log(chalk.hex('#FFB6C1')(`Nombre: ${personaje.nombre}`));
            console.log(chalk.hex('#FFD700')(`Nivel: ${personaje.nivel}`));
            console.log(chalk.hex('#FF69B4')(`Poder: ${personaje.poder}`));
            console.log(chalk.hex('#FFB6C1')(`Ataque: ${personaje.ataque}`));
            console.log(chalk.hex('#FF69B4')(`Vida: ${personaje.vida}`));
            console.log(chalk.hex('#DA70D6')(`Habilidad especial:${personaje.habilidadEspecial}`));
            console.log(chalk.hex('#FF1493')(`Objeto mágico: ${personaje.objetoMagico}`));
            console.log(chalk.hex('#FF69B4')('====================================='));
        })
    }
    menu();
}


function iniciarBatalla() {

    const princesas = personajes.filter(p => p.tipo !== 'Villano');
    const villano = personajes.filter(p => p.tipo === 'Villano');

    if (personajes.length < 2) {
        console.log(chalk.hex('#FF69B4')("Se necesitan al menos dos personajes"));
        menu();
        return
    }

    inquirer.prompt([{
        type: 'list',
        name: 'primerPersonaje',
        message: 'Escoja el primer personaje:',
        choices: princesas.map(p => p.nombre)
    }, {
        type: 'list',
        name: 'segundoPersonaje',
        message: 'Escoja el segundo personaje:',
        choices: villano.map(p => p.nombre)
    }
    ]).then(respuesta => {

        const princesa = princesas.find(p => p.nombre === respuesta.primerPersonaje);
        const villanos = villano.find(v => v.nombre === respuesta.segundoPersonaje);

        if (princesa.tipo === villanos.tipo) {
            console.log(chalk.hex('#FF1493')("¡Error! No puedes hacer pelear dos princesas"));
            menu();
            return;
        }
        if (villanos.tipo !== "Villano") {
            console.log(chalk.hex('#DA70D6')(`${villanos.nombre} no es un villano, no puedes iniciar la batalla`));
            menu();
            return;
        }
        console.log(chalk.hex('#FFB6C1')(`La batalla entre ${princesa.nombre} y ${villanos.nombre} comienza`));
        gestorBatalla(princesa, villanos);

    })
}

function poderesPersonajes(personaje) {
    const poderes = [];

    if (typeof personaje.causarDanio === 'function') poderes.push('Atacar');

    if (typeof personaje.dispararFlecha === 'function') poderes.push('Disparar flecha');

    if (typeof personaje.sanarAliado === 'function') poderes.push('Sanar aliado');

    if (typeof personaje.ataqueEspada === 'function') poderes.push('Ataque con espada');

    if (typeof personaje.usarMagia === 'function') poderes.push('Usar magia');

    if (personaje.invetario && personaje.invetario.objetos.length > 0) {
        poderes.push("Usar objeto");
    }

    return poderes;
}

async function gestorBatalla(princesa, villano) {
    let turno = 1;
    while (princesa.vida > 0 && villano.vida > 0) {
        console.log(chalk.hex('#FFB6C1')(`\n⭐ Turno de ${princesa.nombre}`));
        console.log(chalk.hex('#DA70D6')(`${princesa.nombre}: ${princesa.vida} ❤️`));
        console.log(chalk.hex('#DA70D6')(`${villano.nombre}: ${villano.vida} ❤️`));

        if (turno === 1) {

            const poderesDisponibles = poderesPersonajes(princesa)
            const respuesta = await inquirer.prompt([{
                type: 'list',
                name: 'accion',
                message: `Turno de ${princesa.nombre}, ¿Qué quieres hacer?`,
                choices: poderesDisponibles
            }]);

            switch (respuesta.accion) {
                case 'Atacar':
                    villano.recibirDanio(princesa.ataque);
                    break;
                case 'Disparar flecha':
                    princesa.dispararFlecha(villano)
                    break;
                case 'Sanar aliado':
                    princesa.sanarAliado(princesa)
                    break;
                case 'Ataque con espada':
                    princesa.ataqueEspada(villano)
                    break;
                case 'Usar magia':
                    princesa.usarMagia(villano)
                    break;
                case 'Usar objeto':
                    const objetos = personaje.inventario.objetos.map(o => o.nombre);
                    if (objetos.length === 0) {
                        console.log("No tienes objetos en tu inventario.");
                    } else {
                        const { objetoSeleccionado } = await inquirer.prompt([{
                            type: 'list',
                            name: 'objetoSeleccionado',
                            message: 'Elige un objeto a usar:',
                            choices: objetos
                        }]);
                        personaje.inventario.usarObjeto(objetoSeleccionado, personaje);
                    }
                    break;
            }
            if (villano.vida <= 0) {
                console.log(chalk.hex('#FF1493')(`${villano.nombre} ha sido derrotado, ${princesa.nombre} Gana`));
                break;
            }
            turno = 2;
        } else {
            console.log(`${villano.nombre} ataca a ${princesa.nombre} con ${villano.ataque} puntos de ataque`);
            princesa.vida -= villano.ataque;
            if (princesa.vida <= 0) {
                console.log(chalk.hex('#FF1493')(`${princesa.nombre} ha sido derrotada, ${villano.nombre} Gana`));
                break;
            }
            turno = 1
        }
        console.log(chalk.hex('#FFB6C1')(` ${princesa.nombre}: ${princesa.vida} de vida`));
        console.log(chalk.hex('#FFB6C1')(` ${villano.nombre}: ${villano.vida} de vida`));
        console.log(chalk.hex('#FFB6C1')('---------------------------'));
    }
    menu();
}

menu();