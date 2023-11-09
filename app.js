function limpiar(){
  document.getElementById('contenedor-form').reset();
}
// aca estamos creando las variables y linkeando con nuestros formualario
let numero1=document.getElementById("valor1");
let numero2=document.getElementById("valor2");

let suma=document.getElementById("sumar");
let resta=document.getElementById("restar");
let multipica=document.getElementById("multiplicar");
let divide=document.getElementById("dividir");

let resultado=document.getElementById("resultado");

suma.addEventListener("click", (a,b)=>
{resultado.innerHTML=parseFloat(numero1.value)+parseFloat(numero2.value);} )

resta.addEventListener("click", (a,b)=>
{resultado.innerHTML=parseFloat(numero1.value)-parseFloat(numero2.value);} )

multipica.addEventListener("click", (a,b)=>
{resultado.innerHTML=parseFloat(numero1.value)*parseFloat(numero2.value);} )

divide.addEventListener("click", (a,b)=>
{resultado.innerHTML=parseFloat(numero1.value)/parseFloat(numero2.value);} )






// function sumar(){
//   var x= parseInt(document.getElementById("valor1").value);
//   var y= parseInt(document.getElementById("valor2").value);
//   document.getElementById('el-resultado').innerHTML = x+y;
//   console.log(x,y);
// }

// function restar(){
//   var x= parseInt(document.getElementById("valor1").value);
//   var y= parseInt(document.getElementById("valor2").value);
//   document.getElementById('el-resultado').innerHTML = x-y;
// }

// function multiplicar(){
//   var x= parseInt(document.getElementById("valor1").value);
//   var y= parseInt(document.getElementById("valor2").value);
//   document.getElementById('el-resultado').innerHTML = x*y;
// }

// function dividir(){
//   var x= parseInt(document.getElementById(valor1).value);
//   var y= parseInt(document.getElementById(valor2).value);
//   document.getElementById('el-resultado').innerHTML = x/y;
// }