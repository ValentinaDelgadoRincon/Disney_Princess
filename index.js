const inquirer = require('inquirer');
const Maga = require('./maga');
const Villano = require('./villano');
const Aliado = require('./aliado');

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
            type: 'number',
            name: 'nivel',
            message: 'Nivel inicial:',
            default: 1
        }, {
            type: 'number',
            name: 'poder',
            message: 'Poder inicial:',
            default: 20
        }, {
            type: 'number',
            name: 'ataque',
            message: 'Ataque inicial: ',
            default: 10
        }, {
            type: 'number',
            name: 'vida',
            message: 'Vida inicial:',
            default: 100
        },{
            type:''
        }, {
            type: 'list',
            name: 'objetoMagico',
            message: 'Elege un objeto mágico:',
            choices: ['copo de nieve', 'espada ancestral', 'arco y flecha', 'flor de loto', 'bastón mágico', 'vara de la serpiente']
        }]).then((personajeGuardado) => {
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
                    habilidadEspecial ="Desconocida";
                    break;
            }
            personajes.push({
                tipo: tipoSeleccionado,
                nombre: personajeGuardado.personajes,
                nivel: personajeGuardado.nivel,
                poder: personajeGuardado.poder,
                ataque: personajeGuardado.ataque,
                vida: personajeGuardado.vida,
                objetomagico: personajeGuardado.objetoMagico,
                habilidadEspecial:habilidadEspecial
            });
            console.log("Personaje creado :)");
            menu();
        })

    });
};

function verPersonajes(){
    if(personajes.length === 0){
        console.log("No hay personajes creados");
    }else{
        personajes.forEach((personaje,index)=>{
        console.log('+++++++++++++++++++++++++++++++++');
        console.log(`Personajes: ${index +1}:`);
        console.log(`Tipo: ${personaje.tipo}`);
        console.log(`Nombre: ${personaje.nombre}`);
        console.log(`Nivel: ${personaje.nivel}`);
        console.log(`Poder: ${personaje.poder}`);
        console.log(`Ataque: ${personaje.ataque}`);
        console.log(`Vida: ${personaje.vida}`);
        console.log(`Habilidad especial:${personaje.habilidadEspecial}`);
        console.log(`Objeto mágico: ${personaje.objetomagico}`);
        console.log('++++++++++++++++++++++++++++++++++')
    })
    }
    
}


function iniciarBatalla(){

    const princesas= personajes.filter(p=>p.tipo!=='Villano');
    const villano= personajes.filter(p=>p.tipo==='Villano');

    if(personajes.length < 2){
        console.log("Se necesitan al menos dos personajes");
        menu();
        return
    }

    inquirer.prompt([{
        type:'list',
        name:'primerPersonaje',
        message:'Escoja el primer personaje:',
        choices:princesas.map(p=>p.nombre)
    },{
        type:'list',
        name:'segundoPersonaje',
        message:'Escoja el segundo personaje:',
        choices:villano.map(p=>p.nombre) 
    }
])

console.log(`La batalla entre ${primerPersonaje.nombre}`)
    }
    