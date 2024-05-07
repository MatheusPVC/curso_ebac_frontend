const form = document.querySelector('#formulario');
mensagem = document.querySelector('#mensagem')

function validaNumero(n1,n2){
    if (n1 > n2){
        resultado = true
    } else{
        resultado = false
    }
    return resultado;
};

form.addEventListener('submit', function(e){
    e.preventDefault()
    let resultado = true;
    let campoA = document.querySelector('#campo-A');
    let campoB = document.querySelector('#campo-B');

    resultado = validaNumero(campoB.value,campoA.value);

    if (resultado){
        console.log('sucesso')
        mensagem.style.display = 'block';
        mensagem.style.backgroundColor = 'green';
        mensagem.innerHTML = 'o número ' + campoB.value + ' é maior que o ' + campoA.value + '!';
        campoA.value = '';
        campoB.value = '';
    } else{
        console.log('falha')
        mensagem.style.display = 'block';
        mensagem.style.backgroundColor = 'red';
        mensagem.innerHTML = 'o número ' + campoB.value + ' é menor que o ' + campoA.value + '...';
        campoA.value = ''
        campoB.value = ''
    }
    console.log(resultado)
});