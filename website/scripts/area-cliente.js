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
            titulo.textContent = "Status do Projeto";
            texto.innerHTML = `
                <div class="modal-flex">
                    <div class="col-main">
                        <div class="stepper-box">
                            <div class="stepper-step stepper-completed">
                                <div class="stepper-circle">
                                    <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"></path></svg>
                                </div>
                                <div class="stepper-line"></div>
                                <div class="stepper-content">
                                    <div class="stepper-title">Início do Projeto</div>
                                    <div class="stepper-status">Finalizado (Briefing & Design)</div>
                                </div>
                            </div>

                            <div class="stepper-step stepper-active">
                                <div class="stepper-circle">2</div>
                                <div class="stepper-line"></div>
                                <div class="stepper-content">
                                    <div class="stepper-title">Desenvolvimento</div>
                                    <div class="stepper-status">Em Progresso (Frontend)</div>
                                </div>
                            </div>

                            <div class="stepper-step stepper-pending">
                                <div class="stepper-circle">3</div>
                                <div class="stepper-content">
                                    <div class="stepper-title">Publicação</div>
                                    <div class="stepper-status">Aguardando</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="divisor-v"></div>
                    <div class="col-side">
                        <p style="font-size: 14px; opacity: 0.7;">Entrega prevista:</p>
                        <h3 style="color: #14C204">25/05/2026</h3>
                        <button class="btn-modal-action">Ver Detalhes</button>
                    </div>
                </div>`;
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