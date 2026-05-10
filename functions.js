const usuarios = [
    {
        usuario: "mimmarcelo",
        senha: "teste123"
    },
    {
        usuario: "hugo",
        senha: "hugo123"
    },
    {
        usuario: "erick",
        senha: "erick123"
    },
    {
        usuario: "paulo",
        senha: "paulo123"
    },
    {
        usuario: "pedro",
        senha: "pedro123"
    }
];

const botao = document.getElementById("btnLogin");

botao.addEventListener("click", function () {

    const usuarioDigitado = document.getElementById("usuario").value;
    const senhaDigitada = document.getElementById("senha").value;

    const mensagem = document.getElementById("mensagem");

    const usuarioEncontrado = usuarios.find(function(user){

        return user.usuario === usuarioDigitado &&
               user.senha === senhaDigitada;

    });

    if(usuarioEncontrado){

        mensagem.innerHTML = "Login realizado com sucesso!";
        mensagem.style.color = "green";

        setTimeout(function(){

            window.location.href = "home.html";

        }, 1500);

    } else {

        mensagem.innerHTML = "Usuário ou senha incorretos.";
        mensagem.style.color = "red";

    }

});