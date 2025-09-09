const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.video-card1');
const cardWidth = cards[0].offsetWidth;


let index = 0;


function slide() {
index++;
if (index > cards.length - 3) {
index = 0;
}
track.style.transform = `translateX(${-index * cardWidth}px)`;
}


setInterval(slide, 3000); // muda a cada 3s