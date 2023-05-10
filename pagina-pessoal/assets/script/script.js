//exemplo de uso de alerta e tipos de variáveis:

//let saudacao = "olá,meu nome é";
//const nome = " juliana"

//alert(saudacao + nome);

//instanciando variáveis do hmtl:

//const email = document.querySelector('#email') //mais utilizado
//const email2 = document.querySelector(".email2")
//const nome = document.getElementById('nome')


//variáveis usadas nas funções

let assunto = document.querySelector('#assunto')
let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let nomeOk = false 
let emailOk = false
let assuntoOk = false

//ajustando o nome 

nome.style.width = '100%'

//validando o nome 

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    console.log(nome.value);
    if(nome.value.length < 2) {
        txtNome.innerHTML = 'Nome invalido'
        txtNome.style.color = 'red'
        nome.style.border='3px solid red'
    } else {
        txtNome.innerHTML = 'Nome valido'
        txtNome.style.color = 'green'
        nome.style.border='3px solid green'
        nomeOk = true
    }
    }

//validando e ajustando o assunto: 
    function validaAssunto() {
        let txtAssunto = document.querySelector('#txtAssunto')

        if (assunto.value.length >= 500) {
            txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 500 caracteres'
            txtAssunto.style.color ='red'
            txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

    assunto.style.width= '100%'

//validando e ajustando o email: 
        function validaEmail () {
        let txtEmail = document.querySelector('#txtEmail')
        if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){ 
            txtEmail.innerHTML = 'E-mail inválido'
            email.style.color = 'red'
            email.style.border='3px solid red'
        } else {
            txtEmail.innerHTML = 'E-mail válido'
            email.style.color = 'green'
            email.style.border='3px solid green'
            emailOk = true
        }
        }
        
    email.style.width = '100%'


//enviando alert ao clicar no botão enviar
function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Mensagem recebida!')
    } else {
        alert('Preencha o formulário corretamente antes de enviar')
    }
}
