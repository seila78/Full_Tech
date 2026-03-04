const botoes = document.querySelectorAll('.action-button');
const modal = document.getElementById('Modal');
const fechar = document.getElementById('btnFechar');
const caixa = document.getElementById('caixaConteudo');

const titulo = document.getElementById('modalTitulo');
const texto = document.getElementById('modalTexto');

botoes.forEach(botao => {
    botao.addEventListener('click', (event) => {
        event.preventDefault();
        const tipo = botao.dataset.tipo;

        caixa.style.backgroundImage = "none";
        titulo.style.color = "#14C204";

        if (tipo === "status") {
            titulo.textContent = "Status do Projeto";
            caixa.style.setProperty('background', "url('../imagens/status.png') center/cover no-repeat", 'important');
        }

        if (tipo === "dominio") {
            titulo.textContent = "Gerenciamento de Domínio";
        }

        if (tipo === "suporte") {
            titulo.textContent = "Suporte Técnico";
        }

        if (tipo === "faturas") {
            titulo.textContent = "Faturas";
        }

        modal.style.display = "flex";
    });
});

fechar.addEventListener('click', () => {
    modal.style.display = "none";
});

modal.addEventListener('click', () => {
    modal.style.display = "none";
});

caixa.addEventListener('click', (e) => {
    e.stopPropagation();
});