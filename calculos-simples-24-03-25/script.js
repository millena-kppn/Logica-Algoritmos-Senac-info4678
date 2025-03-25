"use strict"
function somar(){
   let number_on = document.getElementById("numberOn").value;
   let number_two = document.getElementById("numberTwo").value;
   let soma = Number(number_on) + Number(number_two);
   alert(soma);
}
function subtrair(){
   let number_on = document.getElementById("numberOn").value;
   let number_two = document.getElementById("numberTwo").value;
   let subtrai = Number(number_on) - Number(number_two);
   alert(subtrai);
}
function multiplicar(){
   let number_on = document.getElementById("numberOn").value;
   let number_two = document.getElementById("numberTwo").value;
   let multiplica = Number(number_on) * Number(number_two);
   alert(multiplica);
}
function dividir(){
   let number_on = document.getElementById("numberOn").value;
   let number_two = document.getElementById("numberTwo").value;
   let dividi = Number(number_on) / Number(number_two);
   alert(dividi);
}