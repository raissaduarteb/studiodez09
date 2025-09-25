const divSetas = document.querySelectorAll('.setas');

divSetas.forEach((divSeta) => {
    const attrFor = divSeta.getAttribute(`for`);
    const content = document.querySelector(`.${attrFor}`);
    const carousel = content.querySelector(`.carousel-track`);

    setTimeout(() => {
        const cards = carousel.querySelectorAll(`div`);
        const cardWidth = cards[0].offsetWidth;

        const setas = divSeta.querySelectorAll(`svg`);

        setas[0].addEventListener('click', () => {
            if (content.offsetWidth > `400`) {
                carousel.scrollBy({ left: -(cardWidth * 2), behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
            }
        });

        setas[1].addEventListener('click', () => {
            if (content.offsetWidth > `400`) {
                carousel.scrollBy({ left: cardWidth * 2, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
            }
        });
    }, 1000);
});
