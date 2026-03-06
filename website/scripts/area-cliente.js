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
            titulo.textContent = "Status do Serviço";
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
        }

        if (tipo === "suporte") {
            titulo.textContent = "Suporte Técnico";
            texto.innerHTML = `
                <div class="center">
                    <div class="ticket-card">
                        <div class="ticket-header">
                            <span class="ticket-id">#1204</span>
                            <span class="status-badge open">Em Aberto</span>
                        </div>
                        
                        <h3 class="ticket-title">Erro ao processar pagamento via Pix</h3>
                        <p class="ticket-update">Última atualização: Hoje, às 14:20</p>
                        
                        <div class="ticket-footer">
                            <button class="btn-view">Ver Chamado</button>
                        </div>
                    </div>
                </div>
            `;
        }

        if (tipo === "faturas") {
            titulo.textContent = "Faturas";
            texto.innerHTML = `
                <div class="center">   
                    <div class="fatura-card">
                        <div class="fatura-info">
                            <span class="fatura-name">Correção de Bugs</span>
                            <span class="fatura-date">28/07/2022</span>
                        </div>
                        <div class="fatura-value">R$350,00</div>
                        <div class="fatura-badge pendente">PENDENTE</div>
                    </div>

                    <div class="fatura-card">
                        <div class="fatura-info">
                            <span class="fatura-name">Renovação de Assinatura</span>
                            <span class="fatura-date">01/07/2022</span>
                        </div>
                        <div class="fatura-value">R$600,00</div>
                        <div class="fatura-badge pago">PAGO</div>
                    </div>

                    <div class="fatura-card">
                        <div class="fatura-info">
                            <span class="fatura-name">Criação Página Equipe</span>
                            <span class="fatura-date">23/06/2022</span>
                        </div>
                        <div class="fatura-value">R$200,00</div>
                        <div class="fatura-badge pago">PAGO</div>
                    </div>

                    <div class="fatura-card">
                        <div class="fatura-info">
                            <span class="fatura-name">Assinatura Plano Básico</span>
                            <span class="fatura-date">01/07/2022</span>
                        </div>
                        <div class="fatura-value">R$3500,00</div>
                        <div class="fatura-badge pago">PAGO</div>
                    </div>
                </div>
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