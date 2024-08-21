// SELECCIONAMOS LOS ELEMENTOS
const btn_Encriptar=document.querySelector(".boton_Encriptar");
const mensaje_Encr=document.querySelector(".mensaje");
const txtEncriptar=document.querySelector(".ingresar_Texto_Encriptar");
const aviso=document.querySelector(".texto_Aviso");
const mensaje_Respuesta=document.querySelector(".mensaje");
const contenido_Tarjeta=document.querySelector(".Tarjeta")
//DEBEMOS ACTIVAR EL BOTON DE COPIAR DEBIDO A QUE LO TENEMOS INVISIBLE EN NUESTRO STYLES.CSS
const btn_Copiar=document.querySelector(".boton_Copiar")
//boton desencriptar
const btn_Desencriptar=document.querySelector(".boton_Desencriptar")
//trataremos el boton encriptar 
btn_Encriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto=txtEncriptar.value;
    // console.log(texto);//testing console
//Esta forma combina caracteres equivalentes en una sola secuencia canónica. Por ejemplo, si tienes una cadena con una letra “ñ” representada de diferentes maneras, NFC las unificará en una única representación canónica.
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g," ")
    // console.log(txt);


    if(texto==""){
        aviso.style.background= "";
        aviso.style.color="";
        aviso.style.fontWeight="500";
        aviso.textContent = "¡Cuidado!!, el campo no debe estar vacío , por favor escribe algo a encriptar o desencriptar";
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1800);
    }
    //el campo de texno no debe tener caracteres especiales 
    else if (texto!==txt){
        aviso.style.background= "";
        aviso.style.color="";
        aviso.style.fontWeight="500";
        aviso.textContent = "¡Cuidado!!, el campo no debe tener acentos ni caracteres especiales";
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1800);
    }
    //texto en mayuscula
    else if (texto !== texto.toLowerCase()){
        aviso.style.background= "";
        aviso.style.color="";
        aviso.style.fontWeight="500";
        aviso.textContent = "¡Cuidado!!, el texto debe ser todo en minuscula";
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1800);
    }

    else {
        texto=texto.replace(/e/mg,"enter");//durante la liena de texto la palabra E sera remplazada por la palabra enter
        texto=texto.replace(/i/mg,"imes");
        texto=texto.replace(/a/mg,"ai");
        texto=texto.replace(/o/mg,"ober");
        texto=texto.replace(/u/mg,"ufat");
        //AHORA BUSCAREMOS QUE EL MENSAJE QUEDE REGISTRADO DENTRO DE NUESTRO TEXT AREA DE LA DERECHA QUE SERA LO QUE VEREMOS DE ACA EN ADELANTE
        mensaje_Respuesta.innerHTML=texto;
        contenido_Tarjeta.remove();
        //ahora aparecera el boton de copiar 
        btn_Copiar.style.visibility="inherit"
    }
    // console.log(texto);//testing console
});


//Area del Boton Desencriptar para tener en cuenta su funcionamiento adicional------------------------------------------------------------------------
btn_Desencriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto=txtEncriptar.value;
    // console.log(texto);//testing console
//Esta forma combina caracteres equivalentes en una sola secuencia canónica. Por ejemplo, si tienes una cadena con una letra “ñ” representada de diferentes maneras, NFC las unificará en una única representación canónica.
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g," ")
    // console.log(txt);


    if(texto==""){
        aviso.style.background= "";
        aviso.style.color="";
        aviso.style.fontWeight="500";
        aviso.textContent = "¡Cuidado!!, el campo no debe estar vacío , por favor escribe algo a encriptar o desencriptar";
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1800);
    }
    //el campo de texno no debe tener caracteres especiales 
    else if (texto!==txt){
        aviso.style.background= "";
        aviso.style.color="";
        aviso.style.fontWeight="500";
        aviso.textContent = "¡Cuidado!!, el campo no debe tener acentos ni caracteres especiales";
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1800);
    }
    //texto en mayuscula
    else if (texto !== texto.toLowerCase()){
        aviso.style.background= "";
        aviso.style.color="";
        aviso.style.fontWeight="500";
        aviso.textContent = "¡Cuidado!!, el texto debe ser todo en minuscula";
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1800);
    }

    else {
        texto=texto.replace(/e/mg,"e");//durante la liena de texto la palabra E sera remplazada por la palabra enter
        texto=texto.replace(/i/mg,"i");
        texto=texto.replace(/a/mg,"a");
        texto=texto.replace(/o/mg,"o");
        texto=texto.replace(/u/mg,"u");
        //AHORA BUSCAREMOS QUE EL MENSAJE QUEDE REGISTRADO DENTRO DE NUESTRO TEXT AREA DE LA DERECHA QUE SERA LO QUE VEREMOS DE ACA EN ADELANTE
        mensaje_Respuesta.innerHTML=texto;
        contenido_Tarjeta.remove();
        //ahora aparecera el boton de copiar 
        btn_Copiar.style.visibility="inherit"
    }
    // console.log(texto);//testing console
});
//Funcionalidad para el boton de copiar
btn_Desencriptar.addEventListener("click",e=>{
    e.preventDefault();
});

//funcionalidad copiar
btn_Copiar.addEventListener("click", (e) => {
    e.preventDefault();
    let funcionalidad_Copiar=mensaje_Respuesta;
    funcionalidad_Copiar.select();
    //copia los elementos seleccionados en la parte de arriba
    document.execCommand("copy");
})