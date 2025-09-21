function criarCarrossel(carouselSelector, cardSelector, intervalTime = 2000, qtyVideo = 3) {
    const carousel = document.querySelector(carouselSelector); // container com overflow-x
    const track = carousel.querySelector('.carousel-track');
    const cards = carousel.querySelectorAll(cardSelector);
    const cardWidth = cards[0].offsetWidth;
    let index = 0;
    let videoTocando = false;
    let intervaloCarrossel = setInterval(slide, intervalTime);

    function slide() {
        index++;
        if (index > cards.length - qtyVideo) {
            index = 0;
        }
        track.scrollTo({
            left: index * cardWidth,
            behavior: 'smooth'
        });
    }

    // pausa quando passar o mouse
    cards.forEach(card => {
        card.addEventListener('mouseover', () => clearInterval(intervaloCarrossel));
        card.addEventListener('mouseleave', () => {
            if (!videoTocando) {
                intervaloCarrossel = setInterval(slide, intervalTime);
            }
        });
    });

    // pausa quando vídeo do YouTube toca
    cards.forEach(card => {
        const iframe = card.querySelector('iframe');
        new YT.Player(iframe.id, {
            events: {
                'onStateChange': event => {
                    if (event.data === YT.PlayerState.PLAYING) {
                        videoTocando = true;
                        clearInterval(intervaloCarrossel);
                    } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
                        videoTocando = false;
                        // intervaloCarrossel = setInterval(slide, intervalTime);
                    }
                }
            }
        });
    });

    const divSetas = document.querySelectorAll('.setas');

    divSetas.forEach(divSeta => {
        const attrFor = divSeta.getAttribute(`for`);

        if (`.${attrFor}` == carouselSelector) {
            const setas = divSeta.querySelectorAll(`svg`);

            setas[0].addEventListener('click', () => {
                track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
                console.log(intervaloCarrossel)
                clearInterval(intervaloCarrossel);
                setTimeout(() => { intervaloCarrossel = setInterval(slide, intervalTime) }, 10000); 
            });

            setas[1].addEventListener('click', () => {
                track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
                clearInterval(intervaloCarrossel);
                setTimeout(() => { intervaloCarrossel = setInterval(slide, intervalTime) }, 10000); 
            });
        }
    });
}

// Chamando a função para cada carrossel
function onYouTubeIframeAPIReady() {
    criarCarrossel('.carousel1', '.video-card1', 2000, 3);
    criarCarrossel('.carousel2', '.video-card2', 3000, 5);
}