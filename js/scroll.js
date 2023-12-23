const itens_left = [
    document.querySelector('.explication p'),
]
const itens_right = [
    document.querySelector('.explication img'),
]
ScrollReveal().reveal(itens_left,{
    delay: 500,
    reset: true,
    origin: 'left',
    distance: '150%',
    duration: 2000,
    opacity: .6,
});
ScrollReveal().reveal(itens_right,{
    delay: 250,
    reset: true,
    origin: 'right',
    distance: '150%',
    duration: 2000,
});