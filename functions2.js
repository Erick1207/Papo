document.addEventListener('DOMContentLoaded', () => {

    const grupos = document.querySelectorAll('.grupo1, .grupo2, .grupo3, .grupo4, .grupo5');
    const conversas = document.querySelectorAll('.conversa-content');
    const inputMensagem = document.getElementById('mensagem');
    const botaoEnviar = document.getElementById('enviar');
    let conversaAtual = null;
    function esconderTodasConversas() {
        conversas.forEach(conversa => {
            conversa.classList.remove('active');

        });

    }

    document.getElementById('conversa-padrao').classList.add('active');
   grupos.forEach(grupo => {

    grupo.addEventListener('click', () => {

        esconderTodasConversas();
        const grupoId = grupo.id.replace('grupo-', 'conversa-');
        conversaAtual = document.getElementById(grupoId);

        if (conversaAtual) {
            conversaAtual.classList.add('active');
            inputMensagem.value = '';

        }

    });

});

    function resetarMensagens(conversa) {
        const mensagensDinamicas = conversa.querySelectorAll('.mensagem.usuario');
        mensagensDinamicas.forEach(msg => {
            msg.remove();

        });

    }
    botaoEnviar.addEventListener('click', enviarMensagem);
    inputMensagem.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            enviarMensagem();

        }

    });

    function enviarMensagem() {
        if (!conversaAtual) return;
        const texto = inputMensagem.value.trim();
        if (texto === '') return;
        const novaMensagem = document.createElement('div');
        novaMensagem.classList.add('mensagem');
        novaMensagem.classList.add('usuario');
        novaMensagem.innerHTML = `<p>${texto}</p>`;
        conversaAtual.appendChild(novaMensagem);
        inputMensagem.value = '';
        conversaAtual.scrollTop = conversaAtual.scrollHeight;

    }

});