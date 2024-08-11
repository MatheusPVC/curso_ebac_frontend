document.addEventListener('DOMContentLoaded', function(){
    form.addEventListener('submit', function(evento) {
        evento.preventDefault();

        let primeiroNumero = document.getElementById('primeiro-numero').value;
        let segundoNumero = document.getElementById('segundo-numero').value;
        const form = document.getElementById('form');
        let resultado = document.querySelector('.caixa-resultado');
        let resposta = 0
        
        if (primeiroNumero == '')  {
            if (segundoNumero == ''){
                alert('preencha os campos');
                resultado.style.display = 'none';
            } else {
                resposta = parseInt(segundoNumero)
                document.getElementById('texto-resultado').innerText = resposta
                resultado.style.display = 'block';
            }
        } else if (segundoNumero != '') {
            resposta = parseInt(primeiroNumero) + parseInt(segundoNumero);
            document.getElementById('texto-resultado').innerText = resposta
            resultado.style.display = 'block';
        } else {
            resposta = parseInt(primeiroNumero);
            document.getElementById('texto-resultado').innerText = resposta
            resultado.style.display = 'block';
        };
    })

});