// Seleciona todos os links internos com data-target
const menuLinks = document.querySelectorAll('nav a[data-target]');
const sections  = document.querySelectorAll('.page');

// Ao clicar num link, ativa só a seção correspondente
menuLinks.forEach(link => {
  link.addEventListener('click', evt => {
    evt.preventDefault();
    const targetId = link.getAttribute('data-target');

    // Remove .active de todas
    sections.forEach(sec => sec.classList.remove('active'));
    // Adiciona .active somente na desejada
    document.getElementById(targetId).classList.add('active');
  });
});

// Intercepta o submit do formulário
document.getElementById('formContato').addEventListener('submit', e => {
  e.preventDefault();
  alert('Obrigado pelo contato, ' + e.target.nome.value + '!');
  e.target.reset();
});
