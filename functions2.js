document.addEventListener('DOMContentLoaded', () => {
    const grupos = document.querySelectorAll('.grupo1, .grupo2, .grupo3, .grupo4, .grupo5');
    const conversas = document.querySelectorAll('.conversa-content');

    function esconderTodasConversas() {
        conversas.forEach(conversa => {
            conversa.classList.remove('active');
        });
    }

    document.getElementById('conversa-padrao').classList.add('active');

    grupos.forEach(grupo => {
        grupo.addEventListener('click', () => {
            const grupoId = grupo.id.replace('grupo-', 'conversa-');
            esconderTodasConversas();
            const conversa = document.getElementById(grupoId);
            if (conversa) {
                conversa.classList.add('active');
            }
        });
    });
});