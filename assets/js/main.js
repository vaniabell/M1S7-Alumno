/*console.log("Entro al main.js");

var nombre =" vania "
console.log(nombre)
console.log(nombre)
console.log(nombre)
console.log(nombre)
console.log(nombre)
console.log(nombre)
console.log(nombre)
console.log(nombre)
console.log(nombre)
console.log(nombre)

//var nombre = "jaaciel";


console.log(nombre)

//aqui vamos usar let

/*let nombre = "vania";
let nombre = "isabel";

console.log(nombre_persona);
console.log(nombre_persona); */

/*let nombre = "vania";
let apellido = "olvera";

console.log(nombre + " " + apellido);



console.log(`saludos como estas`) */

let perro ={
    nombre: "willy" ,
    color: "negro" ,
    raza : "Labrador" ,
    edad : 4 ,
    peso : 8,
};
console.log ("el nombre del perro es:" ,perro.nombre);
console.log ("La raza del perro es:" ,perro.raza);
console.log ("la raza dek perro es:" ,perro["raza"]);


let keys = Object.keys(perro);

keys.forEach(llave => {
    console.log(perro[llave]);
});

let perro2={
    nombre: "willy" ,
    color: "negro" ,
    raza : "Labrador" ,
    edad : 4 ,
    peso : 8,
};

const edad_perro =perro2.edad;
const raza_perro =perro2.raza;
//destructuracion
const{raza,edad, nombre:NombrePerro} = perro2;

console.log(raza);
console.log(edad);
console.log(NombrePerro);


const json_colores = `
{
    "arrayColores":[{
            "nombreColor":"rojo",
            "valorHexadec":"#f00"
        },
        {
            "nombreColor":"verde",
            "valorHexadec":"#0f0"
        },
        {
            "nombreColor":"azul",
            "valorHexadec":"#00f"
        },
        {
            "nombreColor":"cyan",
            "valorHexadec":"#0ff"
        },
        {
            "nombreColor":"magenta",
            "valorHexadec":"#f0f"
        },
        {
            "nombreColor":"amarillo",
            "valorHexadec":"#ff0"
        },
        {
            "nombreColor":"negro",
            "valorHexadec":"#000"
        }
    ]
}
`;

const objeto_de_js = JSON.parse(json_colores);

console.log(json_colores); 
console.log(objeto_de_js);

objeto_de_js.arrayColores.forEach(element => {
    console.log(element.nombreColor);
});