// addMenu.js
// Este script será injetado diretamente na página quando ela for carregada

// Função para adicionar o menu superior
function addTopMenu() {
    // Criação do elemento do menu
    var topMenu = document.createElement('div');
    topMenu.innerHTML = '<div class="menu-container"><button class="menu-button active">Tudo</button><button class="menu-button">Não Lidas</button><button class="menu-button">Grupos</button><button class="menu-button">Contatos</button></div>';

    // Adiciona estilos ao menu (pode ser personalizado conforme necessário)
    topMenu.style.position = 'fixed';
    topMenu.style.top = '0';
    topMenu.style.left = '0';
    topMenu.style.width = '100%';
    topMenu.style.backgroundColor = '#333';
    topMenu.style.color = '#fff';
    topMenu.style.padding = '10px';
    topMenu.style.zIndex = '9999';

    // Estilos para os botões do menu
    var buttonStyles = `
        .menu-container {
            display: flex;
            gap: 5px;
        }

        .menu-button {
            padding: 8px 12px;
            border-radius: 20px;
            border: none;
            cursor: pointer;
            background-color: #555;
            color: #fff;
            transition: background-color 0.3s;
        }

        .menu-button.active {
            background-color: #4CAF50;
        }

        .menu-button:hover:not(.active) {
            background-color: #2E7D32;
        }
    `;

    // Cria um elemento <style> para adicionar os estilos dos botões
    var styleElement = document.createElement('style');
    styleElement.innerHTML = buttonStyles;

    // Adiciona os botões e os estilos ao corpo da página
    document.body.appendChild(styleElement);
    var targetDiv = document.querySelector('.two._1jJ70');
    if (targetDiv && targetDiv.parentNode) {
        targetDiv.parentNode.insertBefore(topMenu, targetDiv);
    } else {
        // Caso a div não seja encontrada, adiciona o menu ao corpo da página
        document.body.appendChild(topMenu);
    }
}

// Aguarda 15 segundos antes de chamar a função addTopMenu
setTimeout(addTopMenu, 15000);
