fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });

  fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

// Pega o caminho da URL atual
const currentPage = window.location.pathname.split("/").pop();

// Seleciona todos os links do navbar
setTimeout(() => {
  const navLinks = document.querySelectorAll(".header-nav li a");
  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href").replaceAll('/', '');
    if (linkPage === currentPage) {
      link.parentElement.classList.add("active");
    }
  });
}, 100);
