// MENU MOBILE
const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // FECHAR MENU AO CLICAR EM UM LINK (Melhoria de UX)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Nota: O código de "scrollIntoView" foi removido porque o 
// "scroll-behavior: smooth" no seu CSS já resolve isso para todos os links 
// que apontam para IDs (ex: #contact).