const contador = document.querySelector(".count");
const input = document.querySelector("input");

input.addEventListener("keyup", ()=>{

contador.innerHTML = input.value.length;

});