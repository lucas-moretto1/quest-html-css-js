const inputText = document.querySelectorAll(".input-form");
const checarDados = document.querySelector(".btn-enviar")
const campoObrigatorio = document.querySelectorAll(".obrigatorio");


checarDados.addEventListener("click", function(){
    inputText.forEach(input => {
            if (input.value !== ""){
                input.classList.remove('nao-preenchido');
                input.nextElementSibling.classList.remove("obrigatorio-visivel")
                input.nextElementSibling.classList.add("obrigatorio")
                input.classList.add('preenchido');
            }else{
                input.classList.remove('preenchido');
                input.classList.add('nao-preenchido');
                input.nextElementSibling.classList.add("obrigatorio-visivel")
            }
        })
  })
