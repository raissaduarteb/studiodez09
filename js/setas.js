const divSetas = document.querySelectorAll('.setas');

divSetas.forEach(divSeta => {
  const attrFor = divSeta.getAttribute(`for`);

  const content = document.querySelector(`.${attrFor}`);
  const carousel = content.querySelector(`.carousel-track`);

  const setas = divSeta.querySelectorAll(`svg`);

  setas[0].addEventListener('click', () => {
    carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
  });
  
  setas[1].addEventListener('click', () => {
    carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
  });
});