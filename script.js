window.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }


    
    const comentario = document.getElementById('carrosel');
    comentario.style.scrollBehavior= "smooth"
    let isDown = false;
    let startX;
    let scrollLeft;

    // Inicia o arrasto
    const startDragging = (e) => {
        isDown = true;
        comentario.style.cursor = 'grabbing'; // Muda o cursor ao arrastar
        startX = e.pageX || e.touches[0].pageX; // Posição inicial do mouse ou toque
        scrollLeft = comentario.scrollLeft; // Posição inicial do scroll
    };

    // Para o arrasto
    const stopDragging = () => {
        isDown = false;
        comentario.style.cursor = 'grab'; // Restaura o cursor
    };

    // Realiza o arrasto
    const doDragging = (e) => {
        if (!isDown) return; // Sai se não estiver arrastando
        e.preventDefault(); // Previne o comportamento padrão
        const x = e.pageX || e.touches[0].pageX; // Posição atual do mouse ou toque
        const walk = (x - startX) * 3; // Aumenta a velocidade do arrasto
        comentario.scrollLeft = scrollLeft - walk; // Ajusta a posição do scroll
    };

    function mover_direita(){
        const scrollAmount = window.innerWidth *0.88 ; // Quantidade a mover
        const maxScrollLeft = comentario.scrollWidth - comentario.clientWidth; // Máximo scroll possível

        // Verifica se ainda é possível mover para a esquerda
        if (comentario.scrollLeft < maxScrollLeft) {
            comentario.scrollLeft += scrollAmount; // Move para a esquerda
        } else {
            comentario.scrollLeft = 0; // Reseta para o início, se atingir o fim
        }
    }
    function mover_esquerda(){
        const scrollAmount = window.innerWidth *0.88 ; // Quantidade a mover
        const maxScrollLeft = comentario.scrollWidth - comentario.clientWidth; // Máximo scroll possível

        // Verifica se ainda é possível mover para a esquerda
        if (comentario.scrollLeft < maxScrollLeft) {
            comentario.scrollLeft += -1*scrollAmount; // Move para a esquerda
        } else {
            comentario.scrollLeft = 0; // Reseta para o início, se atingir o fim
        }
    }
    // Auto-movimento
    let direction = 1; // 1 para direita, -1 para esquerda
    const speed = 10; // Pixels a mover
    setInterval(() => {
    const maxScrollLeft = comentario.scrollWidth - comentario.clientWidth; // Máximo scroll possível

        // Move a barra
        comentario.scrollLeft += direction * speed;

        // Verifica se chegou ao final ou início
        if (comentario.scrollLeft >= maxScrollLeft || comentario.scrollLeft <= 0) {
            direction *= -1; // Inverte a direção
        }
    }, 1000); // Mover a cada 2 segundos
    
    // Eventos para mouse
    comentario.addEventListener('mousedown', startDragging);
    comentario.addEventListener('mouseleave', stopDragging);
    comentario.addEventListener('mouseup', stopDragging);
    comentario.addEventListener('mousemove', doDragging);

    // Eventos para toque
    comentario.addEventListener('touchstart', startDragging);
    comentario.addEventListener('touchend', stopDragging);
    comentario.addEventListener('touchmove', doDragging);


});
