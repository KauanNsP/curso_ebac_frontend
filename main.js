$(document).ready(function() { 
    $('#carrossel-imagens').slick({
        autoplay: true
    },100)

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000',{placeholder: '(00)00000-0000'})
    $('#cep').mask('00000-000',{placeholder: '00000-000'})
    $('#cpf').mask('000.000.000-00',{placeholder: '000.000.000-00'})

    $('form').validate({
        rules:{
            nome:{
                required: true,
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true,
            },
            cpf: {
                required: true ,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})