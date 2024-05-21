$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const novoItem = $(`<li>${$('#inputTarefa').val()}</li>`);
        $(novoItem).appendTo('ul');
        $('#inputTarefa').val('');
    })


        $('div').on('click', 'li', function(){
            $(this).toggleClass('removido');
        })
});
