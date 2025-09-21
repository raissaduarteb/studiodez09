const divSetas = document.querySelectorAll('.setas');

divSetas.forEach(divSeta => {
  const attrFor = divSeta.getAttribute(`for`);

  const content = document.querySelector(`.${attrFor}`);

  const setas = divSeta.querySelectorAll(`svg`);

  setas[0].addEventListener('click', () => {
    content.scrollBy({ left: -content.clientWidth, behavior: 'smooth' });
  });
  
  setas[1].addEventListener('click', () => {
    content.scrollBy({ left: content.clientWidth, behavior: 'smooth' });
  });
});