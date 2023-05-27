const mode = document.getElementById('mode_icon');
const githubOriginal = document.getElementById('githubOriginal');
const githubNew = document.getElementById('githubNew');

mode.addEventListener('click', () => {
  const form = document.getElementById('login_form');
  const container = document.getElementById('container');

  if (mode.classList.contains('fa-moon')) {
    mode.classList.remove('fa-moon');
    mode.classList.add('fa-sun');

    form.classList.add('dark');
    container.style.background = 'var(--color-dark-300)'; // Define o fundo como preto no modo escuro

    githubOriginal.classList.add('hidden');
    githubNew.classList.remove('hidden');
  } else {
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');
    container.style.background = 'var(--color-gradient)'; // Restaura o fundo original com gradiente

    githubOriginal.classList.remove('hidden'); 
    githubNew.classList.add('hidden');
  }
});
