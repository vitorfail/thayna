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

    var hands = [];
    hands.push(document.querySelector('#secondhand > *'));
    hands.push(document.querySelector('#minutehand > *'));
    hands.push(document.querySelector('#hourhand > *'));

    var cx = 100;
    var cy = 100;

    function shifter(val) {
    return [val, cx, cy].join(' ');
    }

    var date = new Date();
    var hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2;
    var minuteAngle = 360 * date.getMinutes() / 60;
    var secAngle = 360 * date.getSeconds() / 60;

    hands[0].setAttribute('from', shifter(secAngle));
    hands[0].setAttribute('to', shifter(secAngle + 360));
    hands[1].setAttribute('from', shifter(minuteAngle));
    hands[1].setAttribute('to', shifter(minuteAngle + 360));
    hands[2].setAttribute('from', shifter(hoursAngle));
    hands[2].setAttribute('to', shifter(hoursAngle + 360));

    for(var i = 1; i <= 12; i++) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    el.setAttribute('x1', '100');
    el.setAttribute('y1', '30');
    el.setAttribute('x2', '100');
    el.setAttribute('y2', '40');
    el.setAttribute('transform', 'rotate(' + (i*360/12) + ' 100 100)');
    el.setAttribute('style', 'stroke: #ffffff;');
    document.getElementById("relogio").appendChild(el);
    }
function detectarScroll(el) {
    var elements = document.querySelectorAll("."+el);
    if (elements){
        elements.forEach(function (element) {
            var position = element.getBoundingClientRect();

            // Verifica se o elemento está visível no viewport
            if (position.top < window.innerHeight && position.bottom >= 20) {
                element.id = el; // Adiciona a classe
            }
        });

    }
}
window.addEventListener("scroll",function() {
    detectarScroll("money")
});
const numeros = [1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2,4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2];
const quadrados = numeros.map(num => num * num);
const classes = [
    "fa-solid fa-money-bill",
    "fa-solid fa-dollar-sign",
    "fa-solid fa-sack-xmark",
    "fa-solid fa-piggy-bank"
];
// Seleciona a lista no HTML
const lista = document.querySelector('.money');

// Adiciona os quadrados na lista com um valor aleatório para --i
quadrados.forEach(quadrado => {
    const li = document.createElement('i');
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    li.className = randomClass

    // Gera um número aleatório entre 1 e 100
    const randomValue = Math.random() * 100;

    // Define a variável CSS --i
    li.style.setProperty('--i', randomValue / 50); // Ajusta para estar entre 0 e 1 para opacidade

    lista.appendChild(li);
});

const carousel = document.querySelector('.carousel');

const animateOnScroll = function() {
    const elements = document.querySelectorAll('.show');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    })
}
// Set initial state
const services = document.querySelectorAll('.show');

services.forEach(service => {
    service.style.opacity = '0';
    service.style.transform = 'translateY(30px)';
    service.style.transition = 'all 0.6s ease';
});


window.addEventListener('scroll', animateOnScroll);