document.addEventListener('mousemove', parallax);

function parallax(e) {
    var move = document.querySelector('.object');
    var moving_value = move.getAttribute('data-value');
    var x = (e.clientX - window.innerWidth / 2) / moving_value * 0.1;
    var y = (e.clientY - window.innerHeight / 2) / moving_value * 0.1;
    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
}
