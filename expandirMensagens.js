// expandirMensagens.js
// Este script será injetado diretamente na página quando ela for carregada

// Função para criar e exibir o conteúdo de mensagens prontas
function expandirMensagens() {
    // Criação do elemento da seta
    var arrowElement = document.createElement('div');
    arrowElement.innerHTML = '&#9654;'; // Símbolo da seta para a direita
    arrowElement.style.position = 'fixed';
    arrowElement.style.top = '50%';
    arrowElement.style.right = '0';
    arrowElement.style.transform = 'translateY(-50%)';
    arrowElement.style.backgroundColor = '#333';
    arrowElement.style.color = '#fff';
    arrowElement.style.padding = '10px';
    arrowElement.style.cursor = 'pointer';
    arrowElement.style.zIndex = '9999';

    // Adiciona a seta ao corpo da página
    document.body.appendChild(arrowElement);

    // Função para criar e exibir o conteúdo das mensagens prontas
    function exibirMensagens() {
        // Criação do elemento do conteúdo
        var contentElement = document.createElement('div');
        contentElement.innerHTML = '<p class="clickable-message">Mensagem 1</p><p class="clickable-message">Mensagem 2</p><p class="clickable-message">Mensagem 3</p>';

        // Adiciona estilos ao conteúdo (pode ser personalizado conforme necessário)
        contentElement.style.position = 'fixed';
        contentElement.style.top = '50%';
        contentElement.style.right = '50px';
        contentElement.style.transform = 'translateY(-50%)';
        contentElement.style.backgroundColor = '#fff'; // Alterado para fundo branco
        contentElement.style.color = '#333'; // Alterado para texto preto
        contentElement.style.padding = '20px'; // Aumentado o espaço interno
        contentElement.style.zIndex = '9998';
        contentElement.style.borderRadius = '10px'; // Adicionado bordas arredondadas
        contentElement.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)'; // Adicionado sombra
        contentElement.style.maxWidth = '300px'; // Limitado a largura para melhor leitura
        contentElement.style.display = 'none'; // Inicialmente oculto

        // Adiciona o conteúdo ao corpo da página
        document.body.appendChild(contentElement);

        // Adiciona estilos para tornar as mensagens clicáveis
        var messageStyle = `
            .clickable-message {
                cursor: pointer;
                transition: background-color 0.3s, color 0.3s, text-decoration 0.3s;
            }

            .clickable-message:hover {
                background-color: #f0f0f0; /* Adicione a cor desejada ao passar o mouse */
                text-decoration: underline; /* Adiciona sublinhado ao passar o mouse */
                color: #007bff; /* Altera a cor para azul ao passar o mouse */
            }

            .clickable-message.clicked {
                background-color: #c0c0c0; /* Adicione a cor desejada quando clicado */
                text-decoration: underline; /* Mantém o sublinhado quando clicado */
                color: #007bff; /* Mantém a cor azul quando clicado */
            }
        `;

        // Cria um elemento <style> para adicionar os estilos das mensagens
        var styleElement = document.createElement('style');
        styleElement.innerHTML = messageStyle;

        // Adiciona os estilos ao corpo da página
        document.body.appendChild(styleElement);

        // Adiciona um ouvinte de evento de clique à seta para alternar a visibilidade do conteúdo
        arrowElement.addEventListener('click', function () {
            if (contentElement.style.display === 'none') {
                contentElement.style.display = 'block';
            } else {
                contentElement.style.display = 'none';
            }
        });

        // Adiciona um ouvinte de evento de clique para cada mensagem
        var messages = document.querySelectorAll('.clickable-message');
        messages.forEach(function (message) {
            message.addEventListener('click', function () {
                // Remove a classe 'clicked' de todas as mensagens
                messages.forEach(function (msg) {
                    msg.classList.remove('clicked');
                });

                // Adiciona a classe 'clicked' à mensagem clicada
                message.classList.add('clicked');

                // Insira o conteúdo da mensagem clicada no campo de entrada
                var inputField = document.querySelector('.to2l77zo[contenteditable="true"]');
                if (inputField) {
                    // Obtém o texto da mensagem clicada
                    var clickedText = message.textContent;

                    // Cria um novo elemento span com o texto da mensagem clicada
                    var spanElement = document.createElement('span');
                    spanElement.className = 'selectable-text copyable-text';
                    spanElement.setAttribute('data-lexical-text', 'true');
                    spanElement.textContent = clickedText;

                    // Limpa o conteúdo atual do campo de entrada
                    inputField.innerHTML = '';

                    // Adiciona o novo elemento span ao campo de entrada
                    inputField.appendChild(spanElement);
                }
            });
        });
    }

    // Chama a função para criar e exibir o conteúdo das mensagens prontas
    exibirMensagens();
}

// Aguarda 15 segundos antes de chamar a função expandirMensagens
setTimeout(expandirMensagens, 15000);
