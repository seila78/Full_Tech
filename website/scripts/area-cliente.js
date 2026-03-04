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

        texto.innerHTML = "";
        caixa.style.background = "#ffffff";

        if (tipo === "status") {
            titulo.textContent = "Faturas";
        }

        if (tipo === "dominio") {
            titulo.textContent = "Gerenciamento de Domínio";
        }

        if (tipo === "suporte") {
            titulo.textContent = "Suporte Técnico";
        }

        if (tipo === "faturas") {
            titulo.textContent = "Faturas";
            texto.innerHTML = `
                <img src="../../../imagens/testee.png" 
                     alt="Status" 
                     style="width: 100%; border-radius: 10px; margin-top: 10px; display: block;">
                <div class="modal-botoes">
                <button class="btn-modal btn-pdf">
                    <span class="icon-download"></span>
                    Baixar PDF
                </button>

                <button class="btn-modal btn-pix">
                    Pagar Agora (Pix)
                </button>
        </div>
            `;
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