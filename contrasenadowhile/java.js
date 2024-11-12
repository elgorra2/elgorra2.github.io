let  contrasena = "buenas";
window.prompt("escribe");
do {
    let palabra = prompt("Escriba la contraseña");
    if ( contrasena === palabra.toLowerCase()){
        alert("contraseña correcta puedes continuar");
        break;
    } else {
        alert("contrasena incorrecta vuelve a intentarlo");
    }
} while (contrasena !== palabra.toLocaleLowerCase());