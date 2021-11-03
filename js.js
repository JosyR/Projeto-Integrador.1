document.getElementById("continue").addEventListener("click", function () {
 
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  if (usuario.length < 7){
      alertaErro('Usuário Inválido') ("")
  }
  else if (senha.length < 6){
      alertaErro('Senha Inválida') ("")
  }
  else{
      alertaSucesso()
  }

});




function alertaSucesso(){
  Swal.fire({
     title: 'Seu Cadastro foi realizado!',
      text: 'Login efetuado com Sucesso',
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
