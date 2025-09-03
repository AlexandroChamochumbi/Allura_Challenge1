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
        //mostrar amigos
        recorrerAmigos();
    }
    };

function recorrerAmigos(){
    //agregar amigos a la lista
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //limpiar lista
    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.innerText = amigos[i];
        lista.append(li);
        console.log(li);

    }
    console.log(amigos);
}