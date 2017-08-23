function imprimir(n) {
    var pantalla = document.getElementById('textoPantalla');
    var actual = pantalla.textContent;
    if (actual == 0) {
        pantalla.innerHTML = n;
    } else if (actual.length <= 10) {
        pantalla.innerHTML = actual.toString() + n.toString();
    }
}
 
 resultado=0;
 simboloresultado="";
 
function cleanAll() {
    document.getElementById('textoPantalla').innerHTML = 0;
}

function borrarParcial() {
    document.getElementById('textoPantalla').innerHTML = 0; 
}

function sumar12() {
    var pantalla = document.getElementById('textoPantalla');
    var numeropantalla = pantalla.textContent;
    var residuovariable = document.getElementById('reciduo');
    
    if (parseInt(numeropantalla)==0) {
         residuovariable.innerHTML = resultado;
    } else {
        resultado= parseInt(resultado)+parseInt(numeropantalla);
        residuovariable.innerHTML = resultado;
    }
    simboloresultado="+";
    pantalla.innerHTML = 0;   
}

function restar12() {
    var pantalla = document.getElementById('textoPantalla');
    var numeropantalla = pantalla.textContent;
    var residuovariable = document.getElementById('reciduo');
    
    if (parseInt(numeropantalla)!==0) {
         if (resultado==0) {
            resultado = numeropantalla;
            residuovariable.innerHTML = resultado;
        }else {
             resultado= parseInt(resultado)-parseInt(numeropantalla);
             residuovariable.innerHTML = resultado;
        }
    } else {
       residuovariable.innerHTML = resultado;
    }
    simboloresultado="-";
    pantalla.innerHTML = 0;   
}

function multiplicar12() {
    var pantalla = document.getElementById('textoPantalla');
    var numeropantalla = pantalla.textContent;
    var residuovariable = document.getElementById('reciduo');
    
    if (parseInt(numeropantalla)!==0) {
         if (resultado==0) {
            resultado = numeropantalla;
            residuovariable.innerHTML = resultado;
        }else {
             resultado= parseInt(resultado)*parseInt(numeropantalla);
             residuovariable.innerHTML = resultado;
        }
    } else {
       residuovariable.innerHTML = resultado;
    }
    simboloresultado="*";
    pantalla.innerHTML = 0;   
}

function borrarTotal(){
    var pantalla = document.getElementById('textoPantalla');
    var residuovariable = document.getElementById('reciduo');
    resultado=0;
    residuovariable.innerHTML = "";
    pantalla.innerHTML = 0;
    
}

function borrarCaracter(){
    var pantalla = document.getElementById('textoPantalla');
    var actual = pantalla.textContent;
    var ultima = actual.length;
    var preresultado="";
    
    if (ultima===1) {
        actual=0;
        pantalla.innerHTML = actual;
    } else {
        for (var i = 0; i < ultima-1; i++) { 
            resultado = actual.charAt(i);
            preresultado = preresultado+resultado;
        }
        pantalla.innerHTML = preresultado;  
    } 
}

function dividir12() {
    var pantalla = document.getElementById('textoPantalla');
    var numeropantalla = pantalla.textContent;
    var residuovariable = document.getElementById('reciduo');
    
    if (parseInt(numeropantalla)!==0) {
         if (resultado==0) {
            resultado = numeropantalla;
            residuovariable.innerHTML = resultado;
        }else {
             resultado= parseFloat(resultado)/parseFloat(numeropantalla);
             residuovariable.innerHTML = resultado;
        }
    } else {
       residuovariable.innerHTML = resultado;
    }
    simboloresultado="/";
    pantalla.innerHTML = 0;   
}
function igual12(){
    var residuovariable = document.getElementById('reciduo');
    var pantalla = document.getElementById('textoPantalla');
    var numeropantalla = pantalla.textContent;
    if (simboloresultado=="+") {
        resultado  = parseInt(resultado)+parseInt(numeropantalla);
        pantalla.innerHTML =resultado;
        resultado=0;
        residuovariable.innerHTML="";
    } else {
        if (simboloresultado=="-") {
            resultado  = parseInt(resultado)-parseInt(numeropantalla);
            pantalla.innerHTML =resultado;
            resultado=0;
            residuovariable.innerHTML="";
        } else {
            if (simboloresultado=="*") {
                if (parseInt(numeropantalla)!==0) {
                    resultado  = parseInt(resultado)*parseInt(numeropantalla);  
                } 
                pantalla.innerHTML =resultado;
                residuovariable.innerHTML="";
                resultado=0;
                
            } else {
                if (simboloresultado=="/") {
                    if (parseInt(numeropantalla)!==0) {
                    resultado  = parseFloat(resultado)/parseFloat(residuovariable);  
                    } 
                    pantalla.innerHTML =resultado;
                    residuovariable.innerHTML="";
                    resultado=0;
                } else {
                    if (simboloresultado=="%") {
                        if (parseInt(numeropantalla)!==0) {
                            resultado = parseFloat(numeropantalla)/100;
                            resultado  = parseFloat(resultado)*parseFloat(residuovariable.textContent);  
                        } 
                        pantalla.innerHTML =resultado;
                        residuovariable.innerHTML="";
                        resultado=0;
                    } else {
                        
                    }
                }
            }
        }
        
    }
}


function raiz12(){
    var residuovariable = document.getElementById('reciduo');
    var pantalla = document.getElementById('textoPantalla');
    var numeropantalla = pantalla.textContent;
    numeropantalla = Math.sqrt(numeropantalla);
    pantalla.innerHTML = numeropantalla;
    simboloresultado="raiz";
}

function cuadrado12(){
    var residuovariable = document.getElementById('reciduo');
    var pantalla = document.getElementById('textoPantalla');
    var numeropantalla = pantalla.textContent;
    numeropantalla = numeropantalla*numeropantalla;
    pantalla.innerHTML = numeropantalla;
    simboloresultado="cuadrado";
}

function fraccionario12(){
    var residuovariable = document.getElementById('reciduo');
    var pantalla = document.getElementById('textoPantalla');
    var numeropantalla = pantalla.textContent;
    numeropantalla = 1/numeropantalla;
    pantalla.innerHTML = numeropantalla;
    simboloresultado="1/x";
}

function proncentaje12(){
    var residuovariable = document.getElementById('reciduo');
    var pantalla = document.getElementById('textoPantalla');
    var numeropantalla = pantalla.textContent;
    var numeroresiduo = residuovariable.textContent;
    resultado = parseFloat(numeropantalla)/100;
    resultado = parseFloat(numeroresiduo)*parseFloat(resultado);
    residuovariable.innerHTML = resultado;
    pantalla.innerHTML = 0;
    simboloresultado="%";
}

