const select = document.querySelector('.select')
const key = document.querySelector('.containerkey')

const encode = document.getElementById('encode')
const decode = document.getElementById('decode')

// Cifra de César

/*Código ASCII para JS
  A - Z = 65 á 90
  a - z = 97 á 122 */
  
function cifraCesar() {
  let b1 = document.getElementById('bloco1').value
  let ascii = parseInt(document.getElementById('slidernumber').value)

  let output = ''

//criptografar a mensagem
if (encode.checked) {
    for (let i = 0; i < b1.length; i++){  
      if (b1.charCodeAt(i) >= 65 && b1.charCodeAt(i) <= 90) {
    //(codLetraASC - cod1aLetra + desloc) % tamAlfabeto) + cod1aLetra
        output += String.fromCharCode((b1.charCodeAt(i) + ascii - 65) % 26 + 65); 
      } else if (b1.charCodeAt(i) >= 97 && b1.charCodeAt(i) <= 122) {
        output += String.fromCharCode((b1.charCodeAt(i) + ascii - 97) % 26 + 97);
      } else {
        output += String.fromCharCode(b1.charCodeAt(i));
      }
    }
    return output;

//descriptografar a mensagem 
  } else if (decode.checked) {
    for (let i = 0; i < b1.length; i++) {
      if (b1.charCodeAt(i) >= 97 && b1.charCodeAt(i) <= 122) {
        output += String.fromCharCode((b1.charCodeAt(i) - 97 -  ascii + 26) % 26 + 97);
      } else if (b1.charCodeAt(i) >= 65 && b1.charCodeAt(i) <= 90) {
        output += String.fromCharCode((b1.charCodeAt(i) - 65 - ascii + 26) % 26 + 65);
      } else {
        output += String.fromCharCode(b1.charCodeAt(i));
      }
    }
    return output;
  }
}

// Ativação do campo de deslocamento da Cifra de César
select.addEventListener("click", function () {
  if (select.value == "cifra") {
    key.style.display = "block"
  } else {
    key.style.display = "none"
  } // se não selecionado esse campo não aparece
})

// Base64
function base64() {
    let message = document.getElementById("bloco1").value // escolher uma string qualquer
  
//convertendo para a base 64
    if (encode.checked) {
      let encoded = btoa(message)
      return encoded

//retornando para a mensagem original
    } else if (decode.checked) {
      let decoded = atob(message)
      return decoded
    }
  }

// Função dos botões de codificar e decodificar 
$('.radiobtn').click(function(){
  if (encode.checked) {
    btn.innerHTML = "Codificar sua Mensagem!"
  } else if (decode.checked) {
    btn.innerHTML = "Decodificar sua Mensagem!"
  } 
}) // muda de acordo com o que foi selecionado acima 

$('button').click(function(e){
  e.preventDefault()
if (select.value === "base64") {
  result.innerText = base64()
} else if (select.value === "cifra") {
  result.innerText = cifraCesar()
}})// transfere o resultado codificado ou decodificado para o campo de resultado conforme o algoritmo escolhido*/
