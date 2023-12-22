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
    distance: '500%',
    duration: 2000,
});
ScrollReveal().reveal(itens_right,{
    delay: 500,
    reset: true,
    origin: 'right',
    distance: '500%',
    duration: 2000,
});