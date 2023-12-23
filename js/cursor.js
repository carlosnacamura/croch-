const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#FF6347",
  "#FF7F50",
  "#FF4500",
  "#DC143C",
  "#FF0000",
  "#CD5C5C",
  "#8B0000",
  "#800000",
  "#B22222",
  "#FF69B4",
  "#FF1493",
  "#C71585",
  "#DB7093",
  "#FFB6C1",
  "#FFC0CB",
  "#FFD700",
  "#FFFF00",
  "#FFA500",
  "#FF8C00",
  "#FFDAB9",
  "#FFE4B5",
  "#FAFAD2",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
const img_main = document.querySelector(".explication img")
document.addEventListener("scroll",()=>{
  const y = scrollY
  if (y >= 400 && y <= 800){
    img_main.style.filter = 'blur(0px)'
  } else {
    img_main.style.filter = 'blur(10px)'
  }
})