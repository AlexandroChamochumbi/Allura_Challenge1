// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    //leer amigo
    let amigo = document.getElementById("amigo");

    //validar amigo
    if (amigo.value === ""){
        alert("El campo no puede estar vacío");
    }

    //agregar amigo
    else{
        amigos.push(amigo.value);
        console.log(amigos);
        //limpiar input
        amigo.value = "";
    }
    }