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
console.log(currentPage);

// Seleciona todos os links do navbar
setTimeout(() => {
  const navLinks = document.querySelectorAll(".header-nav li a");
  console.log(navLinks)
  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href").replaceAll('/', '');
    console.log(linkPage);
    if (linkPage === currentPage) {
      link.parentElement.classList.add("active");
    }
  });
}, 100);
