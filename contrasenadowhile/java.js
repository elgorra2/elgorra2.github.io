let  contrasena;
contrasena = "buenas";

for (let i = 0; i < 3; i++){
    do {
        let palabra = prompt("Escriba la contraseña");
        if ( contrasena === palabra.toLowerCase()){
            alert("contraseña correcta puedes continuar");
            break
        }
    }


