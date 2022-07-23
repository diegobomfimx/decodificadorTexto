var mensagem = document.querySelector("#campotexto");

var resultado = document.querySelector("#textoescrito");

var decript = document.querySelector("#descriptografar");

// invertendo as propriedades e os valores do objeto 
var descriptografar = {
    'ai' : 'a',
    'enter' : 'e',
    'ober' : 'o',
    'ufat' : 'u',
    'imes' : 'i'
}


mensagem.addEventListener("input", function (event) {
    newText = event.target.value;
    for (var txt in descriptografar) {
        var temp = new RegExp(txt, 'gi');
        newText = newText.replace(temp, descriptografar[txt]);
    }

    decript.addEventListener('click', function() {
        resultado.textContent = newText;

        elementRemAdd()
        ///if para mostrar botao
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

