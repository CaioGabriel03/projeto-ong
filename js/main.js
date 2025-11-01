document.addEventListener('DOMContentLoaded', () => {

    /* --- FUNÇÃO UTILITY: MOSTRAR FEEDBACK (TOAST) --- */
    function mostrarFeedback(mensagem, tipo = 'sucesso', duracao = 4000) {
        let container = document.getElementById('toast-container');
        
        // Cria o container se ele não existir (deve ser o primeiro a ser criado no CSS)
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        // Define as classes: base 'toast' e a específica de cor 'toast-sucesso' ou 'toast-erro'
        toast.className = `toast toast-${tipo}`;
        toast.textContent = mensagem;

        container.appendChild(toast);

        // Força o reflow para garantir a animação CSS (de baixo para cima)
        void toast.offsetWidth;

        // Adiciona a classe 'mostrar' para iniciar a transição de visibilidade
        toast.classList.add('mostrar');

        // Configura o tempo para desaparecer
        setTimeout(() => {
            toast.classList.remove('mostrar');
            // Remove o elemento do DOM após a transição de saída (0.3s definido no CSS)
            setTimeout(() => {
                container.removeChild(toast);
            }, 300);
        }, duracao);
    }
    /* --- FIM FUNÇÃO UTILITY --- */


    const menuToggle = document.getElementById('menu-toggle');
    const navegacaoPrincipal = document.getElementById('navegacao-principal');

    if (menuToggle && navegacaoPrincipal) {
        menuToggle.addEventListener('click', () => {
            const estaAberto = navegacaoPrincipal.classList.contains('aberto');
            
            navegacaoPrincipal.classList.toggle('aberto');
            
            menuToggle.setAttribute('aria-expanded', !estaAberto);
            
            menuToggle.innerHTML = estaAberto ? '☰' : '✕';
        });
    }
    
    // Variáveis do Dropdown para o DESKTOP/TABLET
    const dropdownItem = document.querySelector('.dropdown-menu-item');
    
    if (dropdownItem) {
        dropdownItem.addEventListener('mouseenter', () => {
            const submenu = dropdownItem.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });

        dropdownItem.addEventListener('mouseleave', () => {
            const submenu = dropdownItem.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    }

    // Variáveis da página de Apoio (apoio.html)
    const formDoacao = document.getElementById('form-doacao');
    const formVoluntario = document.getElementById('form-voluntario');
    const opcoesValor = document.querySelectorAll('input[name="valor"]');
    const outroValorInput = document.getElementById('outro-valor');
    const radioOutroValor = document.querySelector('input[value="outro"]');

    // Variáveis da página de Galeria (animais.html)
    const formFiltros = document.getElementById('form-filtros');
    const todosCartoes = document.querySelectorAll('.cartao-animal');

    // Lógica para habilitar/desabilitar o campo "Outro valor"
    if (outroValorInput && radioOutroValor) {
        outroValorInput.disabled = true;

        opcoesValor.forEach(radio => {
            radio.addEventListener('change', () => {
                if (radioOutroValor.checked) {
                    outroValorInput.disabled = false;
                    outroValorInput.focus();
                } else {
                    outroValorInput.disabled = true;
                }
            });
        });
    }

    // Lógica para o Formulário de Doação
    if (formDoacao) {
        formDoacao.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let valorDoacao = 0;
            let doacaoValida = false;
            
            if (radioOutroValor && radioOutroValor.checked) {
                valorDoacao = parseFloat(outroValorInput.value);
                if (valorDoacao > 0) {
                    doacaoValida = true;
                }
            } else {
                const valorSelecionado = document.querySelector('input[name="valor"]:checked');
                if (valorSelecionado) {
                    valorDoacao = parseFloat(valorSelecionado.value);
                    doacaoValida = true;
                }
            }

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();

            if (doacaoValida && nome !== '' && email !== '') {
                // SUBSTITUIÇÃO: Usa Toast de Sucesso
                mostrarFeedback(`Doação de R$ ${valorDoacao.toFixed(2)} recebida! Obrigado, ${nome}!`, 'sucesso');
                formDoacao.reset();
            } else {
                // SUBSTITUIÇÃO: Usa Toast de Erro
                mostrarFeedback('Por favor, preencha todos os campos e selecione um valor válido para a doação.', 'erro');
            }
        });
    }

    // Lógica para o Formulário de Voluntariado
    if (formVoluntario) {
        formVoluntario.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nomeVol = document.getElementById('vol-nome').value.trim();
            const emailVol = document.getElementById('vol-email').value.trim();
            const interesse = document.getElementById('interesse').value;

            if (nomeVol !== '' && emailVol !== '' && interesse !== '') {
                // SUBSTITUIÇÃO: Usa Toast de Sucesso
                mostrarFeedback(`Cadastro de voluntário para a área de ${interesse} recebido! Entraremos em contato, ${nomeVol}.`, 'sucesso');
                formVoluntario.reset();
            } else {
                // SUBSTITUIÇÃO: Usa Toast de Erro
                mostrarFeedback('Por favor, preencha todos os campos do formulário de voluntariado.', 'erro');
            }
        });
    }
    
    // Lógica de Filtro da Galeria (animais.html)
    if (formFiltros && todosCartoes.length > 0) {
        formFiltros.addEventListener('submit', (e) => {
            e.preventDefault();

            const tipoFiltro = document.getElementById('tipo').value;
            const porteFiltro = document.getElementById('porte').value;

            todosCartoes.forEach(cartao => {
                const cartaoTipo = cartao.getAttribute('data-tipo');
                const cartaoPorte = cartao.getAttribute('data-porte');
                let deveMostrar = true;

                if (tipoFiltro !== 'todos' && cartaoTipo !== tipoFiltro) {
                    deveMostrar = false;
                }

                if (porteFiltro !== 'todos' && cartaoPorte !== porteFiltro) {
                    deveMostrar = false;
                }

                if (deveMostrar) {
                    cartao.style.display = 'block';
                } else {
                    cartao.style.display = 'none';
                }
            });
        });
    }

});