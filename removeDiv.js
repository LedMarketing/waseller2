function hideDiv() {
    var divToHide = document.querySelector('.ocsria88');

    if (divToHide) {
        // Altere a visibilidade da div para "hidden"
        divToHide.style.visibility = 'hidden';
    } else {
        // Caso a div não exista, imprima no console
        console.log('Div não encontrada');
    }
}

// Aguarde 15 segundos antes de chamar a função hideDiv
setTimeout(hideDiv, 15000);
