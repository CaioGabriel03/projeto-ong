document.addEventListener('DOMContentLoaded', () => {
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
                alert(`Doação de R$ ${valorDoacao.toFixed(2)} recebida! Obrigado, ${nome}!`);
                formDoacao.reset();
            } else {
                alert('Por favor, preencha todos os campos e selecione um valor válido para a doação.');
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
                alert(`Cadastro de voluntário para a área de ${interesse} recebido! Entraremos em contato, ${nomeVol}.`);
                formVoluntario.reset();
            } else {
                alert('Por favor, preencha todos os campos do formulário de voluntariado.');
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