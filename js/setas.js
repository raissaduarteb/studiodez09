const content = document.querySelector('.clients-content');
  const setas = document.querySelectorAll('.setas svg');
  console.log(setas)

  setas[0].addEventListener('click', () => {
    content.scrollBy({ left: -content.clientWidth, behavior: 'smooth' });
  });

  setas[1].addEventListener('click', () => {
    content.scrollBy({ left: content.clientWidth, behavior: 'smooth' });
  });