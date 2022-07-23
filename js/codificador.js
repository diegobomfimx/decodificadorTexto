var mensagem = document.querySelector("#campotexto");

var resultado = document.querySelector("#textoescrito");

var cripto = document.querySelector("#criptografar");



// criando um objeto com as propriedade e valores solicitados
var criptografar = {
    'a' : 'ai',
    'e' : 'enter',
    'o' : 'ober',
    'u' : 'ufat',
    'i' : 'imes'
}

// escutador de eventos que guarda o texto digitado 
mensagem.addEventListener("input", function (event) {
    newText2 = event.target.value;
    for (var txt in criptografar) {
        var temp = new RegExp(txt, 'gim');
        newText2 = newText2.replace(temp, criptografar[txt]);
    }

    // eventlistener que pega texto copiado e joga no novo elemento invisivel
    cripto.addEventListener('click', function() {
        resultado.textContent = newText2;

        elementRemAdd()


            //if para mostrar botao copiar

             if(newText2.length > 0) {
            var visivel = document.querySelector(".bcopiar");
            visivel.classList.add("visivel");
        
            }
            if(newText2.length == 0) {
                var visivel2 = document.querySelector(".bcopiar");
                visivel2.classList.remove("visivel")

            }



        })

    event.preventDefault()
});

//

// função para remover e adicionar elementos
function elementRemAdd() {
    const element = document.querySelectorAll(".tabela1");


        if(newText2.length > 0) {
            for(var i=0; i<element.length; i++) {
            element[i].style.display = 'none';
            }
        }else{
            for(var i=0; i<element.length; i++) {
            element[i].style.display = 'initial';
    
            }
        }
}



// função para copiar texto
  function copiaTexto() {
    newText2.value;
    navigator.clipboard.writeText(newText2).then(() => {
        alert("Texto copiado!");

    })
}

