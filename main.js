const numDecimal = document.querySelector("#decimal");
const numBinario = document.querySelector("#binario");
const numOctal = document.querySelector("#octal");
const numHexadecimal = document.querySelector("#hexadecimal");



numDecimal.addEventListener("keyup", function (evento) {
  evento.preventDefault();

  numBinario.value = parseInt(numDecimal.value, 10).toString(2);
  numOctal.value = parseInt(numDecimal.value, 10).toString(8);
  numHexadecimal.value = parseInt(numDecimal.value, 10).toString(16).toLocaleUpperCase();

    
  if(numDecimal.value == ''){
      numBinario.value = '';
      numOctal.value = '';
      numHexadecimal.value = '';
  }
});



numBinario.addEventListener("keyup", function (evento) {
  evento.preventDefault();
  numDecimal.value = parseInt(numBinario.value, 2);
  
  numOctal.value = parseInt(numDecimal.value, 10).toString(8);
  numHexadecimal.value = parseInt(numDecimal.value, 10).toString(16).toLocaleUpperCase();


  if(numBinario.value == ''){
    numDecimal.value = '';
    numOctal.value = '';
    numHexadecimal.value = '';
  }
});



numOctal.addEventListener("keyup", function (evento) {
  evento.preventDefault();
  numDecimal.value = parseInt(numOctal.value, 8);

  numBinario.value = parseInt(numDecimal.value, 10).toString(2);
  numHexadecimal.value = parseInt(numDecimal.value, 10).toString(16).toLocaleUpperCase();


  if(numOctal.value == ''){
    numDecimal.value = '';
    numBinario.value = '';
    numHexadecimal.value = '';
  }
});



numHexadecimal.addEventListener("keyup", function (evento) {
  evento.preventDefault();
  numHexadecimal.value = numHexadecimal.value.toLocaleUpperCase();
  numDecimal.value = parseInt(numHexadecimal.value, 16);

  numBinario.value = parseInt(numDecimal.value, 10).toString(2);
  numOctal.value = parseInt(numDecimal.value, 10).toString(8);


  if(numHexadecimal.value == ''){
    numDecimal.value = '';
    numBinario.value = '';
    numOctal.value = '';
  }
});
