/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

dato = document.getElementById("numeroUno").value;
dato1 = document.getElementById("numeroDos").value;

dato = parseInt (dato);
dato1 = parseInt (dato1);

dato2 = dato + dato1;
alert(dato2);
}

