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

        if (tipo === "status") {
            titulo.textContent = "Status do Site";
            texto.textContent = "⚠️ Em progresso. ⚠️";
        }

        if (tipo === "dominio") {
            titulo.textContent = "Gerenciamento de Domínio";
            texto.textContent = "⚠️ Em progresso. ⚠️";
        }

        if (tipo === "suporte") {
            titulo.textContent = "Suporte Técnico";
            texto.textContent = "⚠️ Em progresso. ⚠️";
        }

        if (tipo === "faturas") {
            titulo.textContent = "Faturas";
            texto.textContent = "⚠️ Em progresso. ⚠️";
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