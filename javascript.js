

document.getElementById("button").addEventListener("click", function () {
 
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    if (nome.length < 3){
        alertaErro('Preencha seu nome completo') ("")
    }
    else if (email.length < 10){
        alertaErro('Preencha seu email corretamente') ("")
    }
    else{
        alertaSucesso()
    }

});

function alertaSucesso(){
    Swal.fire({
       title: 'Seu Cadastro foi realizado!',
        text:'Seja Bem-Vindo' + " , " + document.getElementById("nome").value + " ! " ,
        icon:'success'
    });


    
}

function alertaErro(){
    Swal.fire ({
        icon: 'erro',
        title: 'Algo deu errado!',
        text: 'Verifique as suas informações e tente novamente'
    });
}