// =========================================
// 1. LÓGICA DO MENU MOBILE
// =========================================
const menuBtn = document.querySelector('.menu-btn');
const navCategories = document.querySelector('.categories');

menuBtn.addEventListener('click', () => {
  // Alterna a classe 'active' que criamos no CSS
  navCategories.classList.toggle('active');
  
  // Troca o ícone de 'hamburguer' (list) para um 'X' ao abrir
  const icon = menuBtn.querySelector('i');
  if (navCategories.classList.contains('active')) {
    icon.classList.remove('ph-list');
    icon.classList.add('ph-x');
  } else {
    icon.classList.remove('ph-x');
    icon.classList.add('ph-list');
  }
});

// =========================================
// 2. LÓGICA DE SCROLL REVEAL (Surgir ao rolar)
// =========================================
// Seleciona todos os elementos que têm a classe .reveal
const revealElements = document.querySelectorAll('.reveal');

// Função que observa quando o elemento entra na tela
const revealCallback = (entries, observer) => {
  entries.forEach(entry => {
    // Se o elemento estiver visível na tela
    if (entry.isIntersecting) {
      entry.target.classList.add('active'); // Adiciona a classe que faz surgir
      observer.unobserve(entry.target); // Para de observar (anima só a 1ª vez)
    }
  });
};

const revealOptions = {
  threshold: 0.15 // Dispara a animação quando 15% do elemento aparece na tela
};

// Cria o observador do navegador
const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

// Manda o observador vigiar cada elemento com a classe .reveal
revealElements.forEach(el => {
  revealObserver.observe(el);
});