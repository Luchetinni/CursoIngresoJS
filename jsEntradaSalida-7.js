/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var dato1;
var dato2;
function sumar()
{	
    cosa();
    resultado = dato1 + dato2;
    alert(resultado);
}

function restar()
{   
    cosa();
    resultado = dato1 - dato2;
    alert(resultado);
}

function multiplicar()
{   cosa();
    resultado = dato1 * dato2;
    alert(resultado);
}

function dividir()
{   cosa();
    resultado = dato1 / dato2;  
    alert(resultado);
}

function cosa() {
    dato1 = document.getElementById("numeroUno").value;
    dato2 = document.getElementById("numeroDos").value;
    dato1 = parseInt (dato1);
    dato2 = parseInt (dato2);
 }


