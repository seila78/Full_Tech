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