const inquirer = require('inquirer');
const Maga = require('./maga');
const Villano = require('./villano');
const Aliado = require('./aliado');

let personajes = [];

function menu(){
    inquirer.prompt([{
        type:'list',
        name:'option',
        message:'Bienvenido a nuestro juego, selecciona la opcionas que deseas hacer:',
        choices:[
            {name:"1. Crear personaje",value:"1"},
            {name:"2. Ver personajes",value:"2"},
            {name:"3. Iniciar batalla", value:"3"},
            {name:"4. Salir",value:"4"}
        ]
    }])
    .then((respuesta)=>{
        switch(respuesta.option){
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

function crearPersonaje(){
    inquirer.prompt([{
        type:'list',
        name:'tipo',
        message:'¿Qué tipo de personaje deseas crear?',
        choices:['Maga','Arquera','Curandera','guerrera','Villano']
    },
    {
        type:'input',
        name:'nombre',
        message:'Escribe el nombre del personaje',
    },{
        type:'number',
        name:'nivel',
        message:'Nivel inicial:',
        default:1
    },{
        type:'number',
        name:'poder',
        message:'Poder inicial:',
        default:20
    },{
        type:'number',
        name:'ataque',
        message:'Ataque inicial: ',
        default:10
    },{
        type:'number',
        name:'vida',
        message:'Vida inicial:',
        default:100
    }
])
}