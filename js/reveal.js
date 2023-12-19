$(document.querySelector('.img')).on('mousemove',(e)=>{
$('#sharp').css({
    left: e.pageX,
    top: e.pageY,
})
})