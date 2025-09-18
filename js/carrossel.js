function criarCarrossel(carouselSelector, cardSelector, intervalTime = 2000, qtyVideo = 3) {
    const track = document.querySelector(`${carouselSelector} .carousel-track`);
    const cards = document.querySelectorAll(`${carouselSelector} ${cardSelector}`);
    const cardWidth = cards[0].offsetWidth;
    let index = 0;
    let videoTocando = false;
    let intervaloCarrossel = setInterval(slide, intervalTime);

    function slide() {
        index++;
        if (index > cards.length - qtyVideo) { // ajuste para quantos vídeos mostrar
            index = 0;
        }
        track.style.transform = `translateX(${-index * cardWidth}px)`;
    }

    // hover nos cards
    cards.forEach(card => {
        card.addEventListener('mouseover', () => clearInterval(intervaloCarrossel));
        card.addEventListener('mouseleave', () => {
            if (!videoTocando) {
                intervaloCarrossel = setInterval(slide, intervalTime);
            }
        });
    });

    // YouTube API
    cards.forEach((card, i) => {
        const iframe = card.querySelector('iframe');
        new YT.Player(iframe.id, {
            events: {
                'onStateChange': event => {
                    if (event.data === YT.PlayerState.PLAYING) {
                        videoTocando = true;
                        clearInterval(intervaloCarrossel);
                    } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
                        videoTocando = false;
                    }
                }
            }
        });
    });
}

// Chamando a função para cada carrossel
function onYouTubeIframeAPIReady() {
    criarCarrossel('.carousel1', '.video-card1', 2000, 3);
    criarCarrossel('.carousel2', '.video-card2', 3000, 5);
}