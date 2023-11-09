function limpiar(){
  document.getElementById('contenedor-form').reset();
}

function sumar(){
  var x= parseInt(document.getElementById(valor1).value);
  var y= parseInt(document.getElementById(valor2).value);
  document.getElementById('el-resultado').innerHTML = x+y;

}