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
        contentElement.innerHTML = '<p>Mensagem 1</p><p>Mensagem 2</p><p>Mensagem 3</p>';

        // Adiciona estilos ao conteúdo (pode ser personalizado conforme necessário)
        contentElement.style.position = 'fixed';
        contentElement.style.top = '50%';
        contentElement.style.right = '50px';
        contentElement.style.transform = 'translateY(-50%)';
        contentElement.style.backgroundColor = '#333';
        contentElement.style.color = '#fff';
        contentElement.style.padding = '10px';
        contentElement.style.zIndex = '9998';
        contentElement.style.display = 'none'; // Inicialmente oculto

        // Adiciona o conteúdo ao corpo da página
        document.body.appendChild(contentElement);

        // Adiciona um ouvinte de evento de clique à seta para alternar a visibilidade do conteúdo
        arrowElement.addEventListener('click', function () {
            if (contentElement.style.display === 'none') {
                contentElement.style.display = 'block';
            } else {
                contentElement.style.display = 'none';
            }
        });
    }

    // Chama a função para criar e exibir o conteúdo das mensagens prontas
    exibirMensagens();
}

// Aguarda 15 segundos antes de chamar a função expandirMensagens
setTimeout(expandirMensagens, 15000);
